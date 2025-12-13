// js/lang-theme.v3.js
// Language & Theme Controller — v4.0
// Supports: vi, en, ja, ko, zh, fr, es, de, ru, hi
// Features: placeholder/title/aria updates, auto-detect, safe DOM checks, public API

(function () {
  "use strict";

  const translations = {
    vi: {
      subtitle: "Tập trung thông minh — Học hiệu quả — Giao diện nhẹ và đẹp",
      start: "Bắt đầu",
      pause: "Tạm dừng",
      skip: "Bỏ qua phiên",
      reset: "Đặt lại đồng hồ",
      todoTitle: "Nhiệm vụ hôm nay",
      add: "Thêm",
      statsTitle: "Thống kê học tập",
      quickSettings: "Cài đặt nhanh",
      pauseOnBlur: "Tự dừng khi rời tab",
      blockRefresh: "Chặn F5 / Ctrl+R",
      autoFull: "Tự bật toàn màn hình",
      vibrate: "Rung khi kết thúc",
      progress: "Tiến trình",
      completed: "Hoàn thành:",
      violations: "Vi phạm:",
      appearance: "Giao diện & Ngôn ngữ",
      overlayTitle: "🚫 Bạn rời khỏi cửa sổ học tập",
      overlayMsg: "Hệ thống đã tạm dừng. Quay lại để tiếp tục nhé!",
      resume: "Tiếp tục",
      cancel: "Hủy",
      sessionFocus: "Đang làm việc: {time} phút",
      sessionShort: "Đang nghỉ ngắn: {time} phút",
      sessionLong: "Đang nghỉ dài: {time} phút",
      placeholderNewTask: "Thêm nhiệm vụ...",
      export: "Xuất dữ liệu",
      hardcore: "Hardcore",
    },
    en: {
      subtitle: "Smart focus — Effective study — Clean & modern interface",
      start: "Start",
      pause: "Pause",
      skip: "Skip session",
      reset: "Reset timer",
      todoTitle: "Today's Tasks",
      add: "Add",
      statsTitle: "Study Statistics",
      quickSettings: "Quick Settings",
      pauseOnBlur: "Auto pause when leaving tab",
      blockRefresh: "Prevent refresh (F5 / Ctrl+R)",
      autoFull: "Auto fullscreen mode",
      vibrate: "Vibrate on end",
      progress: "Progress",
      completed: "Completed:",
      violations: "Violations:",
      appearance: "Appearance & Language",
      overlayTitle: "🚫 You left the study window",
      overlayMsg: "The system is paused. Come back to continue learning!",
      resume: "Resume",
      cancel: "Cancel",
      sessionFocus: "Focus session: {time} min",
      sessionShort: "Short break: {time} min",
      sessionLong: "Long break: {time} min",
      placeholderNewTask: "Add a task...",
      export: "Export data",
      hardcore: "Hardcore",
    },
    ja: {
      subtitle: "スマートに集中 — 効率的に学ぶ — シンプルで美しいデザイン",
      start: "スタート",
      pause: "一時停止",
      skip: "スキップ",
      reset: "リセット",
      todoTitle: "今日のタスク",
      add: "追加",
      statsTitle: "学習統計",
      quickSettings: "クイック設定",
      pauseOnBlur: "タブを離れたら一時停止",
      blockRefresh: "リロード防止 (F5 / Ctrl+R)",
      autoFull: "自動フルスクリーン",
      vibrate: "終了時にバイブ",
      progress: "進行状況",
      completed: "完了:",
      violations: "違反:",
      appearance: "外観と言語",
      overlayTitle: "🚫 学習ウィンドウを離れました",
      overlayMsg: "一時停止中です。戻って勉強を続けましょう！",
      resume: "再開",
      cancel: "キャンセル",
      sessionFocus: "作業中: {time}分",
      sessionShort: "短い休憩: {time}分",
      sessionLong: "長い休憩: {time}分",
      placeholderNewTask: "タスクを追加...",
      export: "データをエクスポート",
      hardcore: "ハードコア",
    },
    ko: {
      subtitle: "스마트 집중 — 효율적인 공부 — 깔끔한 인터페이스",
      start: "시작",
      pause: "일시정지",
      skip: "건너뛰기",
      reset: "리셋",
      todoTitle: "오늘의 할 일",
      add: "추가",
      statsTitle: "공부 통계",
      quickSettings: "빠른 설정",
      pauseOnBlur: "탭을 벗어나면 자동 일시정지",
      blockRefresh: "새로고침 방지 (F5 / Ctrl+R)",
      autoFull: "자동 전체화면",
      vibrate: "종료 시 진동",
      progress: "진행 상황",
      completed: "완료:",
      violations: "위반:",
      appearance: "테마 및 언어",
      overlayTitle: "🚫 공부 창을 벗어났습니다",
      overlayMsg: "일시 정지되었습니다. 돌아와서 계속 공부하세요!",
      resume: "계속하기",
      cancel: "취소",
      sessionFocus: "공부 중: {time}분",
      sessionShort: "짧은 휴식: {time}분",
      sessionLong: "긴 휴식: {time}분",
      placeholderNewTask: "작업 추가...",
      export: "데이터 내보내기",
      hardcore: "하드코어",
    },
    zh: {
      subtitle: "智能专注 — 高效学习 — 简洁美观的界面",
      start: "开始",
      pause: "暂停",
      skip: "跳过",
      reset: "重置",
      todoTitle: "今天的任务",
      add: "添加",
      statsTitle: "学习统计",
      quickSettings: "快速设置",
      pauseOnBlur: "切换标签时自动暂停",
      blockRefresh: "防止刷新 (F5 / Ctrl+R)",
      autoFull: "自动全屏",
      vibrate: "结束时震动",
      progress: "进度",
      completed: "已完成:",
      violations: "违规:",
      appearance: "界面与语言",
      overlayTitle: "🚫 你离开了学习窗口",
      overlayMsg: "系统已暂停，请回来继续学习！",
      resume: "继续",
      cancel: "取消",
      sessionFocus: "学习中: {time} 分钟",
      sessionShort: "短休息: {time} 分钟",
      sessionLong: "长休息: {time} 分钟",
      placeholderNewTask: "添加任务...",
      export: "导出数据",
      hardcore: "极限模式",
    },
    fr: {
      subtitle:
        "Concentration intelligente — Apprentissage efficace — Interface élégante",
      start: "Démarrer",
      pause: "Pause",
      skip: "Passer la session",
      reset: "Réinitialiser",
      todoTitle: "Tâches du jour",
      add: "Ajouter",
      statsTitle: "Statistiques d’étude",
      quickSettings: "Réglages rapides",
      pauseOnBlur: "Pause automatique lors du changement d’onglet",
      blockRefresh: "Empêcher le rafraîchissement (F5 / Ctrl+R)",
      autoFull: "Plein écran automatique",
      vibrate: "Vibrer à la fin",
      progress: "Progression",
      completed: "Terminé:",
      violations: "Infractions:",
      appearance: "Apparence & Langue",
      overlayTitle: "🚫 Vous avez quitté la fenêtre d’étude",
      overlayMsg:
        "Le système est en pause. Revenez pour continuer à apprendre!",
      resume: "Reprendre",
      cancel: "Annuler",
      sessionFocus: "En travail: {time} min",
      sessionShort: "Courte pause: {time} min",
      sessionLong: "Longue pause: {time} min",
      placeholderNewTask: "Ajouter une tâche...",
      export: "Exporter les données",
      hardcore: "Hardcore",
    },
    es: {
      subtitle:
        "Enfoque inteligente — Estudio eficaz — Interfaz limpia y moderna",
      start: "Iniciar",
      pause: "Pausa",
      skip: "Saltar sesión",
      reset: "Reiniciar",
      todoTitle: "Tareas de hoy",
      add: "Agregar",
      statsTitle: "Estadísticas de estudio",
      quickSettings: "Configuraciones rápidas",
      pauseOnBlur: "Pausa automática al cambiar de pestaña",
      blockRefresh: "Evitar recargar (F5 / Ctrl+R)",
      autoFull: "Modo pantalla completa automática",
      vibrate: "Vibrar al terminar",
      progress: "Progreso",
      completed: "Completado:",
      violations: "Infracciones:",
      appearance: "Apariencia e idioma",
      overlayTitle: "🚫 Has salido de la ventana de estudio",
      overlayMsg:
        "El sistema está en pausa. ¡Vuelve para continuar aprendiendo!",
      resume: "Reanudar",
      cancel: "Cancelar",
      sessionFocus: "En trabajo: {time} min",
      sessionShort: "Descanso corto: {time} min",
      sessionLong: "Descanso largo: {time} min",
      placeholderNewTask: "Agregar una tarea...",
      export: "Exportar datos",
      hardcore: "Hardcore",
    },
    de: {
      subtitle:
        "Intensive Konzentration — Effektives Lernen — Sauberes Interface",
      start: "Starten",
      pause: "Pause",
      skip: "Überspringen",
      reset: "Zurücksetzen",
      todoTitle: "Aufgaben heute",
      add: "Hinzufügen",
      statsTitle: "Lernstatistiken",
      quickSettings: "Schnelleinstellungen",
      pauseOnBlur: "Automatisch pausieren beim Tab-Wechsel",
      blockRefresh: "Neuladen verhindern (F5 / Ctrl+R)",
      autoFull: "Automatisch Vollbild",
      vibrate: "Bei Ende vibrieren",
      progress: "Fortschritt",
      completed: "Abgeschlossen:",
      violations: "Verstöße:",
      appearance: "Design & Sprache",
      overlayTitle: "🚫 Du hast das Studienfenster verlassen",
      overlayMsg:
        "Die Sitzung wurde angehalten. Komm zurück, um weiterzulernen!",
      resume: "Fortsetzen",
      cancel: "Abbrechen",
      sessionFocus: "Arbeit: {time} Min.",
      sessionShort: "Kurze Pause: {time} Min.",
      sessionLong: "Lange Pause: {time} Min.",
      placeholderNewTask: "Aufgabe hinzufügen...",
      export: "Daten exportieren",
      hardcore: "Hardcore",
    },
    ru: {
      subtitle: "Умная концентрация — Эффективное обучение — Чистый интерфейс",
      start: "Старт",
      pause: "Пауза",
      skip: "Пропустить сессию",
      reset: "Сбросить",
      todoTitle: "Задачи на сегодня",
      add: "Добавить",
      statsTitle: "Статистика обучения",
      quickSettings: "Быстрые настройки",
      pauseOnBlur: "Пауза при уходе с вкладки",
      blockRefresh: "Блокировать обновление (F5 / Ctrl+R)",
      autoFull: "Автополный экран",
      vibrate: "Вибрация в конце",
      progress: "Прогресс",
      completed: "Выполнено:",
      violations: "Нарушения:",
      appearance: "Внешний вид и язык",
      overlayTitle: "🚫 Вы покинули окно обучения",
      overlayMsg:
        "Сессия приостановлена. Вернитесь, чтобы продолжить обучение!",
      resume: "Продолжить",
      cancel: "Отмена",
      sessionFocus: "Работа: {time} мин.",
      sessionShort: "Короткий перерыв: {time} мин.",
      sessionLong: "Длинный перерыв: {time} мин.",
      placeholderNewTask: "Добавить задачу...",
      export: "Экспорт данных",
      hardcore: "Хардкор",
    },
    hi: {
      subtitle: "स्मार्ट फोकस — प्रभावी अध्ययन — स्वच्छ इंटरफ़ेस",
      start: "शुरू करें",
      pause: "रोकें",
      skip: "सत्र छोड़ें",
      reset: "रीसेट करें",
      todoTitle: "आज के कार्य",
      add: "जोड़ें",
      statsTitle: "अध्ययन सांख्यिकी",
      quickSettings: "त्वरित सेटिंग्स",
      pauseOnBlur: "टैब छोड़ने पर ऑटो-पॉज़",
      blockRefresh: "रिफ्रेश रोकें (F5 / Ctrl+R)",
      autoFull: "ऑटो फुलस्क्रीन",
      vibrate: "समाप्ति पर वाइब्रेट",
      progress: "प्रगति",
      completed: "पूर्ण:",
      violations: "उल्लंघन:",
      appearance: "दिखावट और भाषा",
      overlayTitle: "🚫 आप अध्ययन विंडो छोड़ चुके हैं",
      overlayMsg: "सत्र रोक दिया गया है। जारी रखने के लिए वापस आएं!",
      resume: "जारी रखें",
      cancel: "रद्द करें",
      sessionFocus: "काम: {time} मिनट",
      sessionShort: "छोटी ब्रेक: {time} मिनट",
      sessionLong: "लंबी ब्रेक: {time} मिनट",
      placeholderNewTask: "एक कार्य जोड़ें...",
      export: "डेटा एक्सपोर्ट करें",
      hardcore: "हार्डकोर",
    },
  };

  const supportedLangs = Object.keys(translations); // auto from translations
  const flags = {
    vi: "🇻🇳",
    en: "🇬🇧",
    ja: "🇯🇵",
    ko: "🇰🇷",
    zh: "🇨🇳",
    fr: "🇫🇷",
    es: "🇪🇸",
    de: "🇩🇪",
    ru: "🇷🇺",
    hi: "🇮🇳",
  };
  const names = {
    vi: "Tiếng Việt",
    en: "English",
    ja: "日本語",
    ko: "한국어",
    zh: "中文",
    fr: "Français",
    es: "Español",
    de: "Deutsch",
    ru: "Русский",
    hi: "हिन्दी",
  };

  const body = document.body;
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const toggleLangBtn = document.getElementById("toggleLang");
  const sessionDescEl = document.getElementById("sessionDesc");
  const newTaskInput = document.getElementById("newTask");
  const exportBtn = document.getElementById("exportBtn");
  const hardcoreBtn = document.getElementById("hardcoreBtn");

  // choose initial language:
  let currentLang =
    localStorage.getItem("lang") ||
    (function detect() {
      const nav = (navigator.language || navigator.userLanguage || "en")
        .slice(0, 2)
        .toLowerCase();
      if (supportedLangs.includes(nav)) return nav;
      // map some common variants
      const map = { pt: "es", zh: "zh", ja: "ja", ko: "ko", hi: "hi" };
      return map[nav] || "en";
    })();

  // safe DOM text setter (handles inputs/placeholders/titles/aria)
  function setElementText(el, text) {
    if (!el) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = text;
    } else if (el.hasAttribute("title")) {
      el.title = text;
    } else {
      el.textContent = text;
    }
  }

  function applyLang(lang) {
    if (!translations[lang]) lang = "en";
    // text nodes with data-lang
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.dataset.lang;
      const txt = translations[lang][key];
      if (typeof txt !== "undefined") {
        // special-case placeholders for inputs
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = txt;
        } else {
          el.textContent = txt;
        }
      }
    });

    // placeholders or specific known elements
    if (newTaskInput && translations[lang].placeholderNewTask) {
      newTaskInput.placeholder = translations[lang].placeholderNewTask;
    }
    if (exportBtn && translations[lang].export)
      exportBtn.title = translations[lang].export;
    if (hardcoreBtn && translations[lang].hardcore)
      hardcoreBtn.title = translations[lang].hardcore;

    // update sessionDesc (use current work minutes default)
    updateSessionDescAuto(lang);

    localStorage.setItem("lang", lang);
    currentLang = lang;
    updateLangButton();
  }

  function updateLangButton() {
    if (!toggleLangBtn) return;
    toggleLangBtn.textContent = flags[currentLang] || "🌐";
    toggleLangBtn.title = names[currentLang] || currentLang;
  }

  function cycleLang() {
    const idx = supportedLangs.indexOf(currentLang);
    const next = supportedLangs[(idx + 1) % supportedLangs.length];
    applyLang(next);
  }

  // sessionDesc helper that reads minutes from inputs if available
  function getMinutesFor(type) {
    try {
      if (type === "focus") {
        return +(document.getElementById("workMins")?.value || 25);
      }
      if (type === "short") {
        return +(document.getElementById("shortMins")?.value || 5);
      }
      if (type === "long") {
        return +(document.getElementById("longMins")?.value || 15);
      }
    } catch (e) {}
    return 0;
  }

  function updateSessionDescAuto(lang) {
    // default to focus text using work minutes
    const minutes = getMinutesFor("focus");
    const tmpl = translations[lang || currentLang]?.sessionFocus;
    if (sessionDescEl && tmpl) {
      sessionDescEl.textContent = tmpl.replace("{time}", minutes);
    }
  }

  // public updateSessionDesc used by app core: type = 'focus'|'short'|'long' and minutes number
  function updateSessionDesc(type, minutes) {
    const key =
      type === "focus"
        ? "sessionFocus"
        : type === "short"
        ? "sessionShort"
        : "sessionLong";
    const tmpl = translations[currentLang][key] || "";
    if (sessionDescEl) {
      const text = tmpl.replace(
        "{time}",
        typeof minutes === "number" ? minutes : getMinutesFor(type)
      );
      sessionDescEl.textContent = text;
    }
  }

  // theme handling
  function applyTheme(theme) {
    if (!theme) theme = localStorage.getItem("theme") || "light";
    body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }

  function toggleTheme() {
    applyTheme(body.dataset.theme === "dark" ? "light" : "dark");
  }

  // Initialize UI bindings safely
  if (toggleLangBtn) toggleLangBtn.addEventListener("click", cycleLang);
  if (toggleThemeBtn) toggleThemeBtn.addEventListener("click", toggleTheme);

  // Expose API for app.js
  window.__LangTheme = {
    applyLang,
    getLang: () => currentLang,
    setLang: (l) => applyLang(l),
    updateSessionDesc,
    applyTheme,
    toggleTheme,
    supported: supportedLangs.slice(),
  };

  // apply initial theme + language
  applyTheme(localStorage.getItem("theme") || "light");
  applyLang(currentLang);
  updateLangButton();
})();
