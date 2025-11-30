// chemstudybaby.js (Safe-enhance version)
// - DOES NOT overwrite static .card nodes.
// - Auto-discovers lessons in DOM and groups by data-class.
// - Hooks floating buttons, sidebar-right, progress, "Tiếp tục học", theme persistence.
// - Ctrl/Cmd+Click on a card toggles done. Shift+Enter toggles when card focused.

(() => {
  "use strict";

  const $ = (s, p = document) => (p || document).querySelector(s);
  const $$ = (s, p = document) =>
    Array.from((p || document).querySelectorAll(s));

  const App = {
    // discovered lessons mapping: {7: [{el, id, link, title}], 8: [...], 9: [...]}
    lessonsByClass: {},
    state: { currentClass: 8 },
    els: {},

    init() {
      // cache basic DOM elements
      this.cacheDOM();

      // discover lessons from existing HTML (do NOT overwrite)
      this.discoverLessonsFromDOM();

      // apply saved theme (after possible components loaded)
      this.applySavedTheme();

      // initial UI
      this.showOnlyClass(this.state.currentClass);

      // update sidebar list & progress
      this.updateSidebarList(this.state.currentClass);
      this.updateProgress();

      // bind UI events
      this.bindUI();

      // ensure we re-apply theme if components reloaded by other script
      window.addEventListener("components:loaded", () => {
        this.applySavedTheme();
        // re-cache DOM because components might inject DOM
        this.cacheDOM();
        this.updateSidebarList(this.state.currentClass);
        this.updateProgress();
        this.hookFloatingButtons(); // rebind floating if needed
      });
    },

    cacheDOM() {
      this.els.lessonsGrid = $(".lessons-grid");
      this.els.cardNodes = this.els.lessonsGrid
        ? $$(".lessons-grid .card")
        : [];
      this.els.classBtns = $$(".class-btn");
      this.els.miniFill = $(".progress-mini .progress-fill");
      this.els.miniPct = $(".progress-mini .percent");
      this.els.sidebar = $("#sidebar") || $(".sidebar-right") || null;
      if (this.els.sidebar) {
        this.els.sidebarList = this.els.sidebar.querySelector(".sidebar-list");
        this.els.sidebarFill = this.els.sidebar.querySelector(
          ".sidebar-bottom .fill"
        );
        this.els.sidebarPctText =
          this.els.sidebar.querySelector(".sidebar-bottom .progress-percent") ||
          null;
        this.els.btnContinue = this.els.sidebar.querySelector(
          ".sidebar-bottom .btn-block"
        );
        this.els.sidebarSelect = this.els.sidebar.querySelector(
          ".sidebar-filter select"
        );
        // ensure sidebar percent node exists
        if (
          !this.els.sidebarPctText &&
          this.els.sidebar.querySelector(".sidebar-bottom")
        ) {
          const pct = document.createElement("div");
          pct.className = "progress-percent";
          pct.style.margin = "6px 0 0 0";
          this.els.sidebar
            .querySelector(".sidebar-bottom")
            .insertBefore(pct, this.els.btnContinue);
          this.els.sidebarPctText = pct;
        }
      }

      // floating buttons
      this.els.btnToggleSidebar = $("#btnToggleSidebar");
      this.els.btnHome = $("#btnHome");
      this.els.btnTheme = $("#btnTheme");
      this.els.btnSupport = $("#btnSupport");
      // overlay/support elements will be handled in ensureSupportLoaded()
    },

    // Build in-memory mapping from existing HTML cards.
    discoverLessonsFromDOM() {
      this.lessonsByClass = { 7: [], 8: [], 9: [] };
      const cards = this.els.cardNodes.length
        ? this.els.cardNodes
        : $$(".lessons-grid .card");
      cards.forEach((el, idx) => {
        // class may be in data-class attribute
        const cls = Number(
          el.dataset.class || el.getAttribute("data-class") || 8
        );
        const link =
          el.dataset.link ||
          el.getAttribute("data-link") ||
          (el.querySelector("a") ? el.querySelector("a").href : "");
        const title =
          (el.querySelector("h3") &&
            el.querySelector("h3").textContent.trim()) ||
          `Bài ${idx + 1}`;
        const desc =
          (el.querySelector(".desc") &&
            el.querySelector(".desc").textContent.trim()) ||
          "";
        // generate a stable id: prefer data-lesson-id if present, else build from class+index+slug
        let lid = el.dataset.lessonId || el.getAttribute("data-lesson-id");
        if (!lid) {
          // create deterministic id from title + class
          lid = `cls${cls}_idx${idx}_${title
            .toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/[^a-z0-9_]/g, "")}`;
          el.dataset.lessonId = lid;
        }
        const lesson = { el, id: lid, link, title, desc, class: cls };
        if (![7, 8, 9].includes(cls)) {
          // put into 8 by default if invalid
          this.lessonsByClass[8].push(lesson);
        } else {
          this.lessonsByClass[cls].push(lesson);
        }

        // ensure card has position:relative so we can show done-mark
        el.style.position = el.style.position || "relative";
        // add done-mark node if not present
        if (!el.querySelector(".csb-done-mark")) {
          const dm = document.createElement("div");
          dm.className = "csb-done-mark";
          Object.assign(dm.style, {
            position: "absolute",
            top: "10px",
            right: "12px",
            color: "#7ee787",
            fontWeight: "600",
            fontSize: "13px",
          });
          el.appendChild(dm);
        }

        // initial done state UI
        const done = this.isLessonDoneLessonId(lesson.id);
        this._applyDoneUIToCard(el, done);

        // attach handler for toggling done / navigation
        // remove previous listeners if any by cloning? simpler: use event delegation below instead of direct attach
      });

      // card delegation: handle click and key events on grid container
      if (this.els.lessonsGrid) {
        // remove old listener if present by namespacing? We'll track via property
        if (!this.els.lessonsGrid._csb_hooked) {
          this.els.lessonsGrid.addEventListener("click", (ev) => {
            const card = ev.target.closest(".card");
            if (!card) return;
            const lid = card.dataset.lessonId;
            const cls = Number(
              card.dataset.class ||
                card.getAttribute("data-class") ||
                this.state.currentClass
            );
            // Ctrl/Cmd click toggles done (no navigation)
            if (ev.ctrlKey || ev.metaKey) {
              this.toggleLessonDoneById(lid);
              this.updateProgress();
              this.updateSidebarList(this.state.currentClass);
              this._applyDoneUIToCard(card, this.isLessonDoneLessonId(lid));
              return;
            }
            // Otherwise follow link if present
            const link = card.dataset.link || card.getAttribute("data-link");
            if (link) {
              window.location.href = link;
            }
          });
          // keyboard handler
          this.els.lessonsGrid.addEventListener("keydown", (ev) => {
            const card = ev.target.closest && ev.target.closest(".card");
            if (!card) return;
            if (ev.key === "Enter") {
              if (ev.shiftKey) {
                this.toggleLessonDoneById(card.dataset.lessonId);
                this.updateProgress();
                this.updateSidebarList(this.state.currentClass);
                this._applyDoneUIToCard(
                  card,
                  this.isLessonDoneLessonId(card.dataset.lessonId)
                );
              } else {
                card.click();
              }
            }
          });
          this.els.lessonsGrid._csb_hooked = true;
        }
      }
    },

    // helper to apply "done" UI on a card element
    _applyDoneUIToCard(cardEl, done) {
      const dm = cardEl.querySelector(".csb-done-mark");
      if (dm) dm.textContent = done ? "✓ Đã học" : "";
      cardEl.style.opacity = done ? "0.9" : "1";
    },

    // key format for localStorage: chemstudy_lesson_<id>
    lessonKeyById(id) {
      return `chemstudy_lesson_${id}`;
    },
    isLessonDoneLessonId(id) {
      try {
        return localStorage.getItem(this.lessonKeyById(id)) === "1";
      } catch (e) {
        return false;
      }
    },
    setLessonDoneById(id, done = true) {
      try {
        localStorage.setItem(this.lessonKeyById(id), done ? "1" : "0");
      } catch (e) {}
    },
    toggleLessonDoneById(id) {
      const cur = this.isLessonDoneLessonId(id);
      this.setLessonDoneById(id, !cur);
      // update card UI if card exists
      const card = this.els.lessonsGrid.querySelector(
        `.card[data-lesson-id="${id}"]`
      );
      if (card) this._applyDoneUIToCard(card, !cur);
    },

    // show only cards for class cls (hide others)
    showOnlyClass(cls) {
      this.state.currentClass = Number(cls);
      const allCards = this.els.cardNodes.length
        ? this.els.cardNodes
        : $$(".lessons-grid .card");
      allCards.forEach((card) => {
        const c = Number(
          card.dataset.class || card.getAttribute("data-class") || 8
        );
        if (c === Number(cls)) {
          card.style.display = ""; // reset to whatever CSS sets (block/flex)
        } else {
          card.style.display = "none";
        }
      });
      // update visual on class buttons
      this.els.classBtns.forEach((b) =>
        b.classList.toggle("active", Number(b.dataset.class) === Number(cls))
      );
    },

    updateSidebarList(cls = this.state.currentClass) {
      if (!this.els.sidebarList) return;
      cls = Number(cls);
      this.els.sidebarList.innerHTML = "";
      const arr = this.lessonsByClass[cls] || [];
      arr.forEach((lesson) => {
        const item = document.createElement("div");
        item.className = "sidebar-item";
        item.textContent = lesson.title;
        if (lesson.link) item.dataset.link = lesson.link;
        if (this.isLessonDoneLessonId(lesson.id)) {
          const badge = document.createElement("span");
          badge.textContent = " ✓";
          badge.style.color = "#7ee787";
          badge.style.marginLeft = "8px";
          item.appendChild(badge);
        }
        item.addEventListener("click", () => {
          if (item.dataset.link) window.location.href = item.dataset.link;
        });
        this.els.sidebarList.appendChild(item);
      });
    },

    updateProgress() {
      const cls = Number(this.state.currentClass);
      const lessons = this.lessonsByClass[cls] || [];
      const total = lessons.length || 1;
      let completed = 0;
      lessons.forEach((l) => {
        if (this.isLessonDoneLessonId(l.id)) completed++;
      });
      const pct = Math.round((completed / total) * 100);

      if (this.els.miniFill) this.els.miniFill.style.width = pct + "%";
      if (this.els.miniPct) this.els.miniPct.textContent = pct + "%";

      if (this.els.sidebarFill) this.els.sidebarFill.style.width = pct + "%";
      if (this.els.sidebarPctText)
        this.els.sidebarPctText.textContent = `${pct}% hoàn thành`;

      // update sidebar badges
      this.updateSidebarList(cls);
    },

    bindUI() {
      // class tabs
      this.els.classBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const cls = Number(
            btn.dataset.class || btn.getAttribute("data-class") || 8
          );
          this.showOnlyClass(cls);
          this.updateSidebarList(cls);
          this.updateProgress();
          // sync select element if exists
          if (this.els.sidebarSelect) {
            this.els.sidebarSelect.value = this.selectTextForClass(cls);
          }
        });
      });

      // sidebar filter select
      if (this.els.sidebarSelect) {
        this.els.sidebarSelect.addEventListener("change", (ev) => {
          const v = ev.target.value;
          if (/Lớp 7/i.test(v)) this.showOnlyClass(7);
          else if (/Lớp 8/i.test(v)) this.showOnlyClass(8);
          else if (/Lớp 9/i.test(v)) this.showOnlyClass(9);
          else this.showAllClasses();
          this.updateSidebarList(this.state.currentClass);
          this.updateProgress();
        });
      }

      // continue button
      if (this.els.btnContinue) {
        this.els.btnContinue.addEventListener("click", () => {
          const lessons = this.lessonsByClass[this.state.currentClass] || [];
          let target = lessons.find((l) => !this.isLessonDoneLessonId(l.id));
          if (!target) target = lessons[0];
          if (target && target.link) window.location.href = target.link;
          else this.flashToast("Không tìm thấy liên kết bài học.");
        });
      }

      // floating buttons
      this.hookFloatingButtons();
    },

    showAllClasses() {
      const allCards = this.els.cardNodes.length
        ? this.els.cardNodes
        : $$(".lessons-grid .card");
      allCards.forEach((card) => (card.style.display = ""));
    },

    selectTextForClass(cls) {
      if (cls === 7) return "Lớp 7";
      if (cls === 8) return "Lớp 8";
      if (cls === 9) return "Lớp 9";
      return "Tất cả bài học";
    },

    // Floating buttons behaviour — safe and id-robust
    hookFloatingButtons() {
      // btnToggleSidebar toggles left component container (sidebar-container) if exists,
      // else toggles #sidebar (right) as fallback.
      if (this.els.btnToggleSidebar) {
        this.els.btnToggleSidebar.onclick = () => {
          const leftContainer = document.getElementById("sidebar-container");
          const rightSidebar =
            document.getElementById("sidebar") || this.els.sidebar;
          if (leftContainer) leftContainer.classList.toggle("open");
          else if (rightSidebar) rightSidebar.classList.toggle("open");
        };
      }
      if (this.els.btnHome) {
        this.els.btnHome.onclick = () => {
          const link =
            this.els.btnHome.getAttribute("data-link") || "../../index.html";
          window.location.href = link;
        };
      }
      if (this.els.btnTheme) {
        // use persistent saved theme
        this.els.btnTheme.onclick = () => {
          const isDark = document.body.classList.contains("theme-dark");
          document.body.classList.toggle("theme-dark", !isDark);
          document.body.classList.toggle("theme-light", isDark);
          try {
            localStorage.setItem("theme", !isDark ? "dark" : "light");
          } catch (e) {}
        };
      }
      if (this.els.btnSupport) {
        this.els.btnSupport.onclick = () => this.toggleSupport();
      }
    },

    // support panel (inject only if not present)
    ensureSupportLoaded() {
      if (this.els.supportContainer) return;
      const existing =
        $("#supportPanel") || $("#support-chem") || $("#chem-support") || null;
      if (existing) {
        this.els.supportContainer = existing;
        // overlay may exist
        this.els.overlay = $("#overlay") || null;
        return;
      }
      const holder =
        $("#chem-support-container") || $("#chem-support-container");
      if (!holder) return;
      holder.innerHTML = this._supportHTML();
      this.els.supportContainer = $("#supportPanel");
      if (!$("#overlay")) {
        const o = document.createElement("div");
        o.id = "overlay";
        o.className = "overlay";
        document.body.appendChild(o);
        this.els.overlay = o;
      } else {
        this.els.overlay = $("#overlay");
      }
      const closeBtn = $("#supportClose");
      if (closeBtn)
        closeBtn.addEventListener("click", () => this.closeSupport());
    },

    toggleSupport() {
      if (!this.els.supportContainer) this.ensureSupportLoaded();
      if (!this.els.supportContainer) return;
      this.els.supportContainer.classList.toggle("open");
      if (this.els.overlay) this.els.overlay.classList.toggle("show");
      document.body.style.overflow =
        this.els.supportContainer.classList.contains("open") ? "hidden" : "";
    },
    closeSupport() {
      if (this.els.supportContainer)
        this.els.supportContainer.classList.remove("open");
      if (this.els.overlay) this.els.overlay.classList.remove("show");
      document.body.style.overflow = "";
    },

    _supportHTML() {
      return `
        <aside id="supportPanel" class="support-panel">
          <div class="support-header"><h3>CHEMSUPPORT</h3><button id="supportClose">✕</button></div>
          <div class="support-body"><p>Gợi ý nhanh và tài liệu.</p></div>
        </aside>
      `;
    },

    flashToast(msg, t = 2000) {
      const el = document.createElement("div");
      el.className = "csb-toast";
      el.textContent = msg;
      Object.assign(el.style, {
        position: "fixed",
        bottom: "18px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        zIndex: 99999,
      });
      document.body.appendChild(el);
      setTimeout(() => (el.style.opacity = "0.01"), t - 200);
      setTimeout(() => el.remove(), t);
    },

    applySavedTheme() {
      try {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
          document.body.classList.add("theme-dark");
          document.body.classList.remove("theme-light");
        } else if (saved === "light") {
          document.body.classList.add("theme-light");
          document.body.classList.remove("theme-dark");
        } else {
          // preserve existing body class if any; default to theme-light otherwise
          if (
            !document.body.classList.contains("theme-dark") &&
            !document.body.classList.contains("theme-light")
          ) {
            document.body.classList.add("theme-light");
          }
        }
      } catch (e) {
        // ignore
      }
    },
  };

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    try {
      App.init();
    } catch (err) {
      console.error("App init error:", err);
    }
  });
})();
// === Float-buttons enhancement: fullscreen + theme icon sync + keyboard support ===
(function () {
  // short helpers
  const $ = (s) => document.querySelector(s);
  const setAriaPressed = (el, v) =>
    el && el.setAttribute("aria-pressed", v ? "true" : "false");

  const btnFull = $("#btnFull");
  const btnTheme = $("#btnTheme");
  const btnThemeIcon = $("#btnThemeIcon");
  const btnToggleSidebar = $("#btnToggleSidebar");
  const btnHome = $("#btnHome");
  const btnSupport = $("#btnSupport");
  const progressBar = document.querySelector(".progress-mini-bar");
  const progressFill = document.querySelector(".progress-fill");
  const progressPct = document.querySelector(".progress-mini .percent");

  // Fullscreen toggle
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  }
  // update button state/label on change
  document.addEventListener("fullscreenchange", () => {
    const isFS = !!document.fullscreenElement;
    if (btnFull) {
      btnFull.textContent = isFS ? "EXIT" : "FULL";
      setAriaPressed(btnFull, isFS);
    }
  });

  if (btnFull) {
    btnFull.addEventListener("click", (e) => {
      e.preventDefault();
      toggleFullScreen();
    });
    // keyboard activation (Enter/Space)
    btnFull.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFullScreen();
      }
    });
  }

  // Theme toggle (synchronize with App.applySavedTheme)
  function updateThemeIcon() {
    const saved = (() => {
      try {
        return localStorage.getItem("theme");
      } catch (e) {
        return null;
      }
    })();
    if (!btnThemeIcon) return;
    if (saved === "dark" || document.body.classList.contains("theme-dark")) {
      btnThemeIcon.classList.remove("fa-moon");
      btnThemeIcon.classList.add("fa-sun");
      btnTheme.setAttribute("title", "Chế độ sáng");
    } else {
      btnThemeIcon.classList.remove("fa-sun");
      btnThemeIcon.classList.add("fa-moon");
      btnTheme.setAttribute("title", "Chế độ tối");
    }
  }

  if (btnTheme) {
    // initial sync
    updateThemeIcon();
    btnTheme.addEventListener("click", () => {
      // toggle theme classes
      const isDark = document.body.classList.contains("theme-dark");
      document.body.classList.toggle("theme-dark", !isDark);
      document.body.classList.toggle("theme-light", isDark);
      try {
        localStorage.setItem("theme", !isDark ? "dark" : "light");
      } catch (e) {}
      updateThemeIcon();
    });
    btnTheme.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btnTheme.click();
      }
    });
  }

  // Toggle sidebar / home / support: keyboard friendly and update aria where relevant
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btnToggleSidebar.click();
      }
    });
  }
  if (btnHome) {
    btnHome.addEventListener("click", (e) => {
      const link = btnHome.getAttribute("data-link") || "../../index.html";
      if (link) window.location.href = link;
    });
    btnHome.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btnHome.click();
      }
    });
  }
  if (btnSupport) {
    btnSupport.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btnSupport.click();
      }
    });
  }

  // Progress sync helper: update aria-valuenow and percent text
  function syncMiniProgress(pct) {
    if (!progressBar || !progressFill || !progressPct) return;
    // clamp
    pct = Math.max(0, Math.min(100, Number(pct) || 0));
    progressFill.style.width = pct + "%";
    const bar = progressBar;
    bar.setAttribute("aria-valuenow", String(pct));
    progressPct.textContent = pct + "%";
  }

  // expose to global App if present so App.updateProgress can call it
  if (window.App) {
    // Add a safe method - App may already have updateProgress; we add syncMiniProgress hook
    window.App.syncMiniProgress = function (pct) {
      try {
        syncMiniProgress(pct);
      } catch (e) {
        /* ignore */
      }
    };
    // Patch App.updateProgress to call syncMiniProgress if not already calling:
    const origUpdate = window.App.updateProgress;
    window.App.updateProgress = function () {
      // call original
      try {
        origUpdate && origUpdate.apply(this, arguments);
      } catch (e) {}
      // compute current pct from DOM or lessons
      try {
        // try read percent text
        let pct = 0;
        // if App has a computation, use it (we can compute from sidebar fill width if present)
        if (this.els && this.els.miniPct && this.els.miniPct.textContent) {
          const t = this.els.miniPct.textContent.replace("%", "").trim();
          pct = Number(t) || 0;
        } else if (this.els && this.els.sidebarFill) {
          // attempt to parse width style
          const w = parseFloat(
            getComputedStyle(this.els.sidebarFill).width || 0
          );
          const parent = this.els.sidebarFill.parentElement;
          const pw = parent
            ? parseFloat(getComputedStyle(parent).width || 1)
            : 1;
          pct = Math.round(pw > 0 ? (w / pw) * 100 : 0);
        } else {
          // fallback: try reading .progress-fill width
          const pf = document.querySelector(".progress-fill");
          if (pf) {
            const width = pf.style.width || getComputedStyle(pf).width;
            if (typeof width === "string" && width.indexOf("%") > -1) {
              pct = Number(width.replace("%", "").trim()) || 0;
            }
          }
        }
        syncMiniProgress(pct);
      } catch (e) {
        /* ignore */
      }
    };
  } else {
    // Expose standalone sync in window so other scripts can call it
    window.syncMiniProgress = syncMiniProgress;
  }

  // on load ensure icons sync
  document.addEventListener("DOMContentLoaded", updateThemeIcon);
})();
/* ============================================================
   FLOAT PANEL BUTTONS (trái màn hình)
============================================================ */
function initFloatingButtons() {
  const btnSidebar = document.getElementById("btnToggleSidebar");
  const btnHome = document.getElementById("btnHome");
  const btnTheme = document.getElementById("btnTheme");
  const btnSupport = document.getElementById("btnSupport");

  /* mở sidebar */
  if (btnSidebar) {
    btnSidebar.addEventListener("click", () => {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("open");
    });
  }

  /* về trang Home */
  if (btnHome) {
    btnHome.addEventListener("click", () => {
      window.location.href = "../../index.html";
    });
  }

  /* Dark / Light Mode */
  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      document.body.classList.toggle("theme-dark");
      document.body.classList.toggle("theme-light");
    });
  }

  /* mở support chem */
  if (btnSupport) {
    btnSupport.addEventListener("click", () => {
      const support =
        document.getElementById("supportPanel") ||
        document.getElementById("support-chem");
      if (support) support.classList.add("open", "show");
    });
  }
}
/* ============================================================
   COMPONENT LOADER (Sidebar – Footer – Support)
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  loadComponent(
    "../../component/sidebar.html",
    "sidebar-container",
    initSidebarEvents
  );
  loadComponent("../../component/footer.html", "footer-container");
  loadComponent(
    "../component/chemsupport.html",
    "support-chem-container",
    initSupportEvents
  );
  loadComponent(
    "../../component/chemsupport.html",
    "chem-support-container",
    initSupportEvents
  );

  initFloatingButtons(); // các nút bên trái
});

/* Load HTML component */
function loadComponent(url, containerId, callback) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error("Load component error:", err));
}

/* ============================================================
   SIDEBAR EVENTS
============================================================ */
function initSidebarEvents() {
  const sidebar = document.getElementById("sidebar");

  // click item để chuyển trang
  document.querySelectorAll(".sidebar-item").forEach((item) => {
    item.addEventListener("click", () => {
      const link = item.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });
}

/* ============================================================
   SUPPORT CHEM PANEL
============================================================ */
function initSupportEvents() {
  const supportPanel =
    document.getElementById("supportPanel") ||
    document.getElementById("support-chem");
  const closeBtn = document.getElementById("support-close");

  if (!supportPanel) return;

  // ẩn trên đầu
  supportPanel.classList.remove("show");

  // nút đóng panel
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      supportPanel.classList.remove("show");
    });
  }
}
