// app.ultra.v3.2.js — Pomodoro Ultra Hardcore v3.2
// Upgraded from v3.1: safer wake/fullscreen handling, clearer feature-detection,
// smaller z-index, improved i18n hooks, graceful Netlify/HTTPS notes, bug fixes,
// more robust persistence, and better cleanup on unload.

(() => {
  "use strict";

  /* ===================== CONFIG ===================== */
  const STATE_KEY = "pomodoro_ultra_v3";
  const SAVE_DEBOUNCE_MS = 800;
  const FS_RETRY_INITIAL_MS = 200;
  const FS_RETRY_MAX_MS = 5000;
  const WAKELOCK_REFRESH_MS = 30_000;
  const ORIENT_RETRY_MS = 2500;
  const MAX_LEAVE_ATTEMPTS = 4;
  const AUTO_LOCK_ON_START = true;
  const DEFAULT_ZINDEX = 999999; // avoid absolute max int to be friendlier with other UIs

  window.__ULTRA_CONFIG = window.__ULTRA_CONFIG || {
    aggressiveFullscreen: false,
    requireUserGestureForLock: true,
    i18n: {
      lang: "vi",
      strings: {
        working: "Đang làm việc",
        resting: "Nghỉ ngơi",
        hardcoreOn:
          "Hardcore ON — yêu cầu fullscreen, wakeLock, orientation...",
        hardcoreOff: "Hardcore OFF",
        challengePrompt: "Nhập đúng chuỗi để tiếp tục.",
      },
    },
  };

  /* ===================== DOM HOOKS ===================== */
  const ids = {
    time: "time",
    sessionDesc: "sessionDesc",
    progressBar: "progressBar",
    completed: "completed",
    violations: "violations",
    overlay: "overlay",
    workMins: "workMins",
    shortMins: "shortMins",
    longMins: "longMins",
    cyclesBeforeLong: "cyclesBeforeLong",
    pauseOnBlur: "pauseOnBlur",
    blockRefresh: "blockRefresh",
    autoFull: "autoFull",
    newTask: "newTask",
    addTask: "addTask",
    todoList: "todoList",
    chart: "chart",
    startBtn: "startBtn",
    pauseBtn: "pauseBtn",
    skipBtn: "skipBtn",
    resetBtn: "resetBtn",
    resumeBtn: "resumeBtn",
  };

  function $id(k) {
    return document.getElementById(ids[k]) || null;
  }

  /* ===================== STATE ===================== */
  let mode = "work"; // work | short | long
  let timeLeft = 25 * 60;
  let timer = null;
  let cycle = 0;
  let completed = 0;
  let violations = 0;
  let sessionDurations = { work: 0, short: 0, long: 0 };
  let hardcore = false;
  let leavingAttempts = 0;

  let wakeLock = null;
  let fsRetryTimer = null;
  let wakeRefreshTimer = null;
  let orientRetryTimer = null;
  let blocker = null;
  let challengeModal = null;
  let ultraControl = null;
  let currentChallenge = null;
  let fsRetryMs = FS_RETRY_INITIAL_MS;

  // audio (lazy create)
  let audioCtx = null;
  function ensureAudio() {
    if (!audioCtx && typeof AudioContext !== "undefined")
      audioCtx = new AudioContext();
  }
  function beep(freq = 880, dur = 120) {
    try {
      ensureAudio();
      if (!audioCtx) return;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = "sine";
      o.frequency.value = freq;
      g.gain.value = 0.04;
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      setTimeout(() => o.stop(), dur);
    } catch (e) {
      // silent
    }
  }

  /* ===================== Persistence (debounced + resilient) ===================== */
  let saveTimer = null;
  function doSaveState() {
    try {
      const s = {
        mode,
        timeLeft,
        cycle,
        completed,
        violations,
        sessionDurations,
        savedAt: Date.now(),
        hardcore,
      };
      localStorage.setItem(STATE_KEY, JSON.stringify(s));
    } catch (e) {
      // fallback: try sessionStorage as last resort
      try {
        sessionStorage.setItem(STATE_KEY, JSON.stringify(s));
        console.warn("localStorage failed; saved to sessionStorage");
      } catch (err) {
        console.warn("saveState fail", err);
      }
    }
  }
  function saveState() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(doSaveState, SAVE_DEBOUNCE_MS);
  }

  function loadState() {
    try {
      const raw =
        localStorage.getItem(STATE_KEY) || sessionStorage.getItem(STATE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      mode = s.mode || mode;
      timeLeft = typeof s.timeLeft !== "undefined" ? s.timeLeft : timeLeft;
      cycle = s.cycle || cycle;
      completed = s.completed || completed;
      violations = s.violations || violations;
      sessionDurations = s.sessionDurations || sessionDurations;
      hardcore = !!s.hardcore;
    } catch (e) {
      console.warn("loadState fail", e);
    }
  }

  window.addEventListener("pagehide", doSaveState, { passive: true });
  window.addEventListener("unload", doSaveState);

  /* ===================== I18N helper ===================== */
  function t(key) {
    const cfg = window.__ULTRA_CONFIG && window.__ULTRA_CONFIG.i18n;
    if (!cfg) return key;
    const s = cfg.strings || {};
    return s[key] || key;
  }

  /* ===================== UI ===================== */
  function updateUI() {
    const timeEl = $id("time");
    if (timeEl) {
      const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const ss = String(timeLeft % 60).padStart(2, "0");
      timeEl.textContent = `${mm}:${ss}`;
      timeEl.setAttribute("aria-live", "polite");
    }
    const desc = $id("sessionDesc");
    if (desc)
      desc.textContent = `${
        mode === "work" ? t("working") : t("resting")
      } (${Math.round(timeLeft / 60)} phút)`;
    const pb = $id("progressBar");
    if (pb) {
      const total =
        mode === "work"
          ? +($id("workMins")?.value || 25) * 60
          : mode === "short"
          ? +($id("shortMins")?.value || 5) * 60
          : +($id("longMins")?.value || 15) * 60;
      const pct = total > 0 ? ((total - timeLeft) / total) * 100 : 0;
      pb.style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
      pb.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
    const comp = $id("completed");
    if (comp) comp.textContent = completed;
    const viol = $id("violations");
    if (viol) viol.textContent = violations;
  }

  /* ===================== Timer ===================== */
  function startTimer(silent = false) {
    if (timer) return;
    if (!silent) {
      if (AUTO_LOCK_ON_START && !hardcore) {
        // require user gesture in some browsers to call requestFullscreen/wakeLock
        enterHardcoreSequence().catch(() => {});
      }
    }
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timer);
        timer = null;
        nextSession();
      }
      updateUI();
    }, 1000);
    saveState();
  }
  function pauseTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
      saveState();
    }
  }
  function resetTimer() {
    pauseTimer();
    mode = "work";
    timeLeft = +($id("workMins")?.value || 25) * 60;
    cycle = 0;
    leavingAttempts = 0;
    updateUI();
    saveState();
  }

  function nextSession() {
    if (mode === "work") {
      completed++;
      sessionDurations.work += +($id("workMins")?.value || 25);
      cycle++;
      const cb = +($id("cyclesBeforeLong")?.value || 4);
      mode = cycle % cb === 0 ? "long" : "short";
      timeLeft =
        mode === "short"
          ? +($id("shortMins")?.value || 5) * 60
          : +($id("longMins")?.value || 15) * 60;
    } else {
      if (mode === "short")
        sessionDurations.short += +($id("shortMins")?.value || 5);
      else sessionDurations.long += +($id("longMins")?.value || 15);
      mode = "work";
      timeLeft = +($id("workMins")?.value || 25) * 60;
    }
    saveState();
    updateUI();
    startTimer();
  }

  window.nextSession = nextSession;

  /* ===================== TODO ===================== */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  function renderTodo() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const list = $id("todoList");
    if (!list) return;
    list.innerHTML = tasks
      .map(
        (t, i) =>
          `<div class="todo-item" role="listitem"><span>${escapeHtml(
            t
          )}</span><button aria-label="Xóa nhiệm vụ ${
            i + 1
          }" data-i="${i}" class="btn small ghost">X</button></div>`
      )
      .join("");
  }
  function addTaskAction() {
    const t = ($id("newTask")?.value || "").trim();
    if (!t) return;
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(t);
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {
      console.warn("tasks save fail", e);
    }
    if ($id("newTask")) $id("newTask").value = "";
    renderTodo();
    saveState();
  }

  /* ===================== CHALLENGE (improved) ===================== */
  function injectChallengeUI() {
    if (document.getElementById("ultraChallengeV3")) return;
    const ch = document.createElement("div");
    ch.id = "ultraChallengeV3";
    ch.className = "ultra-challenge hidden";
    ch.innerHTML = `
      <div class="ultra-ch-inner" role="dialog" aria-modal="true" aria-labelledby="challengeTitle">
        <h3 id="challengeTitle">Hoàn thành thử thách để tiếp tục</h3>
        <div id="challengeTextV3" style="font-weight:700;margin:10px 0" aria-live="polite"></div>
        <input id="challengeInputV3" type="text" placeholder="Nhập chính xác..." aria-label="Nhập chuỗi thử thách" />
        <div style="margin-top:10px;display:flex;gap:8px;justify-content:center">
          <button id="challengeSubmitV3" class="btn primary small">Nộp</button>
          <button id="challengeCancelV3" class="btn small ghost">Hủy</button>
        </div>
        <div id="challengeHintV3" style="margin-top:8px;font-size:12px;color:#bdbdbd"></div>
      </div>`;
    Object.assign(ch.style, {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.78)",
      zIndex: DEFAULT_ZINDEX,
    });
    document.body.appendChild(ch);
    challengeModal = ch;
    const css = `
      .ultra-ch-inner { background: var(--card-bg,#fff); padding:18px; border-radius:10px; width: 92%; max-width:520px; text-align:center; box-shadow: 0 20px 80px rgba(0,0,0,0.6); }
      .ultra-challenge.hidden { display:none !important; }
      .ultra-challenge input { width: 78%; padding:10px 12px; border-radius:8px; border:1px solid var(--border,#e2e8f0); }
      .ultra-toast { position: fixed; right:18px; bottom:18px; background:#0b1220; color:#fff; padding:10px 14px; border-radius:10px; opacity:0; transform: translateY(8px); transition: all .22s ease; z-index:${
        DEFAULT_ZINDEX + 1
      } }
    `;
    const tag = document.createElement("style");
    tag.id = "ultraStylesV3";
    tag.appendChild(document.createTextNode(css));
    document.head.appendChild(tag);

    const submit = document.getElementById("challengeSubmitV3");
    const cancel = document.getElementById("challengeCancelV3");
    if (submit) submit.addEventListener("click", submitChallengeV3);
    if (cancel) cancel.addEventListener("click", hideChallengeV3);

    ch.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        const dataset = ch.dataset || {};
        if (!dataset.requestExit) hideChallengeV3();
      }
    });
  }

  function genChallengeV3() {
    const words = [
      "focus",
      "concentrate",
      "study",
      "now",
      "commit",
      "learn",
      "deep",
    ];
    const w = words[Math.floor(Math.random() * words.length)];
    const num = Math.floor(Math.random() * 900 + 100);
    const chars = Math.random().toString(36).slice(2, 5).toUpperCase();
    return `${w}${num}-${chars}`;
  }

  function requestChallengeV3(hint) {
    currentChallenge = genChallengeV3();
    if (!challengeModal) injectChallengeUI();
    const ch = document.getElementById("ultraChallengeV3");
    if (!ch) return;
    ch.querySelector("#challengeTextV3").textContent = currentChallenge;
    ch.querySelector("#challengeHintV3").textContent =
      hint ||
      window.__ULTRA_CONFIG.i18n.strings.challengePrompt ||
      t("challengePrompt");
    const input = ch.querySelector("#challengeInputV3");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 120);
    }
    ch.classList.remove("hidden");
    document.body.classList.add("ultra-dim");
    ensureBlockerV3();
    fsRetryMs = FS_RETRY_INITIAL_MS;
  }

  function hideChallengeV3() {
    const ch = document.getElementById("ultraChallengeV3");
    if (!ch) return;
    ch.classList.add("hidden");
    document.body.classList.remove("ultra-dim");
    removeBlockerV3();
    currentChallenge = null;
  }

  function submitChallengeV3() {
    const ch = document.getElementById("ultraChallengeV3");
    if (!ch) return;
    const v = (ch.querySelector("#challengeInputV3")?.value || "").trim();
    if (!currentChallenge) {
      hideChallengeV3();
      return;
    }
    if (v === currentChallenge) {
      hideChallengeV3();
      beep(880, 150);
      startTimer();
      flashV3("Thử thách OK — Tiếp tục");
    } else {
      violations++;
      saveState();
      updateUI();
      flashViolationV3("Sai — vi phạm +1");
      beep(300, 200);
      currentChallenge = genChallengeV3();
      ch.querySelector("#challengeTextV3").textContent = currentChallenge;
      ch.querySelector("#challengeInputV3").value = "";
      ch.querySelector("#challengeHintV3").textContent = "Sai rồi — thử tiếp.";
    }
  }

  /* ===================== Blocker ===================== */
  function ensureBlockerV3() {
    if (blocker) return;
    blocker = document.createElement("div");
    blocker.id = "ultraBlockerV3";
    Object.assign(blocker.style, {
      position: "fixed",
      inset: "0",
      zIndex: DEFAULT_ZINDEX - 1,
      background: "transparent",
      touchAction: "none",
    });
    blocker.addEventListener("touchstart", (e) => e.preventDefault(), {
      passive: false,
    });
    blocker.addEventListener("pointerdown", (e) => e.preventDefault());
    document.body.appendChild(blocker);
  }
  function removeBlockerV3() {
    if (!blocker) return;
    try {
      blocker.remove();
    } catch (e) {}
    blocker = null;
  }

  /* ===================== Toasts ===================== */
  let toastTimer = null;
  function flashV3(msg = "") {
    let el = document.getElementById("ultraToastV3");
    if (!el) {
      el = document.createElement("div");
      el.id = "ultraToastV3";
      el.className = "ultra-toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.style.opacity = "0";
    }, 2200);
  }
  function flashViolationV3(msg = "") {
    flashV3(msg);
    try {
      if (navigator.vibrate) navigator.vibrate(120);
    } catch (e) {}
  }

  /* ===================== Fullscreen / Orientation / WakeLock (safer) ===================== */
  async function requestFullscreenV3() {
    try {
      if (
        !document.fullscreenElement &&
        document.documentElement.requestFullscreen
      ) {
        await document.documentElement.requestFullscreen({
          navigationUI: "hide",
        });
        fsRetryMs = FS_RETRY_INITIAL_MS;
      }
    } catch (e) {
      // bubble up so caller may decide to retry/backoff
      throw e;
    }
  }
  async function exitFullscreenV3() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
    } catch (e) {}
  }

  async function tryPointerLockV3() {
    try {
      if (document.documentElement.requestPointerLock)
        document.documentElement.requestPointerLock();
    } catch (e) {}
  }
  async function tryExitPointerLockV3() {
    try {
      if (document.exitPointerLock) document.exitPointerLock();
    } catch (e) {}
  }

  async function requestWakeLockV3() {
    try {
      if ("wakeLock" in navigator) {
        // release existing first to recover from some buggy UA implementations
        if (wakeLock) {
          try {
            await wakeLock.release();
          } catch (e) {}
          wakeLock = null;
        }
        // browsers require secure context (HTTPS) — Netlify serves via HTTPS by default
        wakeLock = await navigator.wakeLock.request("screen");
        // react to unexpected release (e.g., system)
        if (wakeLock && typeof wakeLock.addEventListener === "function") {
          wakeLock.addEventListener("release", () => {
            wakeLock = null;
          });
        }
      }
    } catch (e) {
      // fail silently; many browsers will reject without user gesture
    }
  }
  async function releaseWakeLockV3() {
    try {
      if (wakeLock) {
        await wakeLock.release();
        wakeLock = null;
      }
    } catch (e) {
      wakeLock = null;
    }
  }

  function startFsRetryV3() {
    stopFsRetryV3();
    if (!hardcore) return;
    const aggressive = window.__ULTRA_CONFIG.aggressiveFullscreen;
    const ms = aggressive ? 50 : fsRetryMs;
    fsRetryTimer = setTimeout(async function fsAttempt() {
      if (!hardcore) return stopFsRetryV3();
      try {
        await requestFullscreenV3();
      } catch (e) {
        fsRetryMs = Math.min(fsRetryMs * 1.8, FS_RETRY_MAX_MS);
        fsRetryTimer = setTimeout(fsAttempt, aggressive ? 100 : fsRetryMs);
      }
    }, ms);
  }
  function stopFsRetryV3() {
    if (fsRetryTimer) {
      clearTimeout(fsRetryTimer);
      fsRetryTimer = null;
    }
    fsRetryMs = FS_RETRY_INITIAL_MS;
  }

  function startWakeRefreshV3() {
    if (wakeRefreshTimer) return;
    wakeRefreshTimer = setInterval(() => {
      if (hardcore) requestWakeLockV3();
    }, WAKELOCK_REFRESH_MS);
  }
  function stopWakeRefreshV3() {
    if (wakeRefreshTimer) {
      clearInterval(wakeRefreshTimer);
      wakeRefreshTimer = null;
    }
  }

  async function lockOrientationV3() {
    try {
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock("landscape");
      } else if (screen.lockOrientationUniversal) {
        screen.lockOrientationUniversal("landscape");
      }
    } catch (e) {
      // ignore — many desktop browsers don't support
    }
  }
  function startOrientRetryV3() {
    if (orientRetryTimer) return;
    orientRetryTimer = setInterval(() => {
      if (hardcore) lockOrientationV3();
    }, ORIENT_RETRY_MS);
  }
  function stopOrientRetryV3() {
    if (orientRetryTimer) {
      clearInterval(orientRetryTimer);
      orientRetryTimer = null;
    }
  }

  /* ===================== Enter / Exit Hardcore ===================== */
  async function enterHardcoreSequence() {
    hardcore = true;
    saveState();
    flashV3(window.__ULTRA_CONFIG.i18n.strings.hardcoreOn || t("hardcoreOn"));
    // try fullscreen -> orientation -> wakelock; allow fallbacks
    try {
      await requestFullscreenV3();
    } catch (e) {
      // continue — we will retry with backoff but don't block
    }
    lockOrientationV3().catch(() => {});
    requestWakeLockV3().catch(() => {});
    tryPointerLockV3();
    startFsRetryV3();
    startWakeRefreshV3();
    startOrientRetryV3();
    document.body.classList.add("ultra-hardcore-v3");
    // make input gestures less likely to accidentally navigate
    try {
      document.documentElement.style.touchAction = "none";
      document.documentElement.style.overscrollBehavior = "none";
    } catch (e) {}
    addProtectionListenersV3();
    ensureBlockerV3();
    renderUltraControlV3();
    // start timer if not already started
    startTimer();
  }

  function exitHardcoreImmediateV3() {
    hardcore = false;
    saveState();
    document.body.classList.remove("ultra-hardcore-v3");
    try {
      document.documentElement.style.touchAction = "";
      document.documentElement.style.overscrollBehavior = "";
    } catch (e) {}
    stopFsRetryV3();
    stopWakeRefreshV3();
    stopOrientRetryV3();
    tryExitPointerLockV3();
    releaseWakeLockV3();
    exitFullscreenV3();
    removeBlockerV3();
    hideChallengeV3();
    removeProtectionListenersV3();
    flashV3(window.__ULTRA_CONFIG.i18n.strings.hardcoreOff || t("hardcoreOff"));
  }

  function requestExitChallengeV3() {
    pauseTimer();
    requestChallengeV3("Giải xong để tắt Hardcore và thoát an toàn.");
    const ch = document.getElementById("ultraChallengeV3");
    if (ch) ch.dataset.requestExit = "1";
  }

  (function wrapSubmitV3() {
    const old = submitChallengeV3;
    window.submitChallengeV3 = function () {
      try {
        if (old) old();
      } finally {
        const ch = document.getElementById("ultraChallengeV3");
        if (
          ch &&
          ch.dataset &&
          ch.dataset.requestExit === "1" &&
          ch.classList.contains("hidden")
        ) {
          delete ch.dataset.requestExit;
          exitHardcoreImmediateV3();
        }
      }
    };
  })();

  /* ===================== PROTECTION LISTENERS ===================== */
  function onKeyDownV3(e) {
    if (!hardcore) return;
    const key = e.key;
    const isRefresh =
      key === "F5" ||
      (e.ctrlKey && (key === "r" || key === "R")) ||
      (e.metaKey && (key === "r" || key === "R"));
    const isCloseTab =
      (e.ctrlKey && (key === "w" || key === "W")) ||
      (e.metaKey && (key === "w" || key === "W"));
    const isF11 = key === "F11";
    const isEsc = key === "Escape" || key === "Esc";

    if (isRefresh || isCloseTab || isF11) {
      e.preventDefault();
      e.stopPropagation();
      violations++;
      saveState();
      updateUI();
      flashViolationV3("Đã chặn phím — vi phạm +1");
      beep(520, 120);
      return;
    }
    if (isEsc) {
      e.preventDefault();
      e.stopPropagation();
      violations++;
      saveState();
      updateUI();
      requestChallengeV3(
        "Nhấn ESC bị ghi nhận — hoàn thành thử thách để tiếp tục."
      );
    }

    // block Backspace navigation when not in input
    if (
      key === "Backspace" &&
      e.target &&
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "TEXTAREA"
    ) {
      e.preventDefault();
      e.stopPropagation();
      flashViolationV3("Backspace blocked");
    }
  }

  function onContextMenuV3(e) {
    if (!hardcore) return;
    e.preventDefault();
    flashViolationV3("Chuột phải bị chặn trong Hardcore");
  }

  function onVisibilityChangeV3() {
    if (!hardcore) return;
    if (document.hidden) {
      pauseTimer();
      violations++;
      leavingAttempts++;
      saveState();
      updateUI();
      if (leavingAttempts >= MAX_LEAVE_ATTEMPTS) {
        flashViolationV3("Rời quá nhiều lần — phiên reset");
        resetTimer();
        leavingAttempts = 0;
        return;
      }
      // request challenge when hidden — but only set hint (not forced to show since hidden)
      // when user returns, the challenge will be requested in the 'else' branch
    } else {
      // returned
      try {
        // try re-establishing locks but don't spam users
        requestFullscreenV3().catch(() => {});
        lockOrientationV3().catch(() => {});
        requestWakeLockV3().catch(() => {});
      } catch (e) {}
      requestChallengeV3(
        "Bạn vừa quay lại — nhập chính xác chuỗi để tiếp tục."
      );
    }
  }

  function onBeforeUnloadV3(e) {
    if (!hardcore) return e.preventDefault(), (e.returnValue = "");
  }

  function addProtectionListenersV3() {
    window.addEventListener("keydown", onKeyDownV3, { capture: true });
    window.addEventListener("contextmenu", onContextMenuV3, { capture: true });
    document.addEventListener("visibilitychange", onVisibilityChangeV3);
    window.addEventListener("beforeunload", onBeforeUnloadV3);
    try {
      history.pushState({ ultra: 1 }, "", location.href);
      window.addEventListener("popstate", onPopStateV3);
    } catch (e) {}
  }

  function removeProtectionListenersV3() {
    window.removeEventListener("keydown", onKeyDownV3, { capture: true });
    window.removeEventListener("contextmenu", onContextMenuV3, {
      capture: true,
    });
    document.removeEventListener("visibilitychange", onVisibilityChangeV3);
    window.removeEventListener("beforeunload", onBeforeUnloadV3);
    try {
      window.removeEventListener("popstate", onPopStateV3);
    } catch (e) {}
  }

  function onPopStateV3(e) {
    if (!hardcore) return;
    history.pushState({ ultra: 1 }, "", location.href);
    flashViolationV3("Back action blocked");
  }

  function onPageHideV3() {
    if (!hardcore) return;
    pauseTimer();
    violations++;
    leavingAttempts++;
    saveState();
  }

  /* ===================== Gesture / Touch BLOCK ===================== */
  function bindGlobalTouchPreventV3() {
    function prevent(e) {
      if (hardcore) e.preventDefault();
    }
    // gracefully attach if supported; no errors if not
    try {
      document.addEventListener("gesturestart", prevent, { passive: false });
      document.addEventListener("gesturechange", prevent, { passive: false });
      document.addEventListener("gestureend", prevent, { passive: false });
      document.addEventListener(
        "touchmove",
        (e) => {
          if (hardcore) e.preventDefault();
        },
        { passive: false }
      );
    } catch (e) {}
  }

  /* ===================== Overlay helpers ===================== */
  function showOverlayMessageV3(msg) {
    const ov = $id("overlay");
    if (!ov) {
      requestChallengeV3(msg);
      return;
    }
    ov.classList.add("show");
    const title = ov.querySelector("[data-lang='overlayTitle']");
    if (title) title.textContent = msg;
    document.body.classList.add("ultra-dim");
    ensureBlockerV3();
  }
  function hideOverlayMessageV3() {
    const ov = $id("overlay");
    if (ov) ov.classList.remove("show");
    document.body.classList.remove("ultra-dim");
    removeBlockerV3();
  }

  /* ===================== Ultra Control UI ===================== */
  function renderUltraControlV3() {
    if (ultraControl) return;
    ultraControl = document.createElement("div");
    ultraControl.id = "ultraControlV3";
    ultraControl.innerHTML = `<div style="display:flex;gap:8px;align-items:center"><button id="ultraStartV3" class="btn primary small">Start Hardcore V3</button><button id="ultraStopV3" class="btn small ghost">Exit Safe</button></div>`;
    Object.assign(ultraControl.style, {
      position: "fixed",
      right: "12px",
      bottom: "86px",
      zIndex: DEFAULT_ZINDEX - 2,
    });
    document.body.appendChild(ultraControl);
    const s = document.getElementById("ultraStartV3");
    const x = document.getElementById("ultraStopV3");
    if (s) s.addEventListener("click", () => enterHardcoreSequence());
    if (x) x.addEventListener("click", () => requestExitChallengeV3());
  }

  /* ===================== Init & Bind ===================== */
  function init() {
    renderUltraControlV3();
    renderTodo();
    loadState();
    updateUI();
    bindGlobalTouchPreventV3();

    // UI Buttons
    const sBtn = $id("startBtn");
    const pBtn = $id("pauseBtn");
    const kBtn = $id("skipBtn");
    const rBtn = $id("resetBtn");
    const resume = $id("resumeBtn");
    if (sBtn)
      sBtn.onclick = () => {
        if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
        startTimer();
      };
    if (pBtn) pBtn.onclick = pauseTimer;
    if (kBtn)
      kBtn.onclick = () => {
        nextSession();
      };
    if (rBtn) rBtn.onclick = resetTimer;
    if (resume)
      resume.onclick = () => {
        hideOverlayMessageV3();
        startTimer();
      };

    const addBtn = $id("addTask");
    if (addBtn) addBtn.onclick = addTaskAction;
    const todo = $id("todoList");
    if (todo)
      todo.onclick = (e) => {
        if (e.target.tagName === "BUTTON") {
          const i = +e.target.dataset.i;
          const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
          tasks.splice(i, 1);
          try {
            localStorage.setItem("tasks", JSON.stringify(tasks));
          } catch (err) {}
          renderTodo();
          saveState();
        }
      };

    document.addEventListener("fullscreenchange", () => {
      if (hardcore && !document.fullscreenElement) {
        violations++;
        saveState();
        updateUI();
        leavingAttempts++;
        flashViolationV3(
          "Bạn đã rời fullscreen — hoàn thành thử thách khi quay lại."
        );
        setTimeout(() => {
          if (hardcore) startFsRetryV3();
        }, 800);
      }
    });

    document.addEventListener("keydown", (e) => {
      const ch = document.getElementById("ultraChallengeV3");
      if (ch && !ch.classList.contains("hidden")) {
        if (e.key === "Enter") {
          e.preventDefault();
          submitChallengeV3();
        }
      }
    });

    window.addEventListener("pagehide", onPageHideV3);

    if (AUTO_LOCK_ON_START) {
      lockOrientationV3().catch(() => {});
    }

    // Cleanup on unload to avoid dangling timers
    window.addEventListener("unload", () => {
      stopFsRetryV3();
      stopWakeRefreshV3();
      stopOrientRetryV3();
      tryExitPointerLockV3();
      releaseWakeLockV3();
    });

    console.log(
      "app.ultra.v3.2 loaded — safer retries, resilient saves, improved accessibility."
    );
  }

  /* ===================== Exports for debugging ===================== */
  window.pomodoroUltraV3 = {
    enterHardcore: enterHardcoreSequence,
    exitHardcore: exitHardcoreImmediateV3,
    isHardcore: () => hardcore,
    getState: () => ({ mode, timeLeft, completed, violations }),
    config: window.__ULTRA_CONFIG,
  };

  // run init
  init();
})();
