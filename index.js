document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* ========================================================================
         SYSTEM CORE CONFIGURATION
         ========================================================================
        */
  const CONFIG = {
    mascot: {
      idleTime: 5000,
      messages: {
        welcome: "Chào bạn! Mình là EduBot. Hôm nay chúng ta học gì nhỉ?",
        chem: "Hóa học thú vị lắm! Cẩn thận cháy nổ nha 🔥",
        tech: "Công nghệ là tương lai. Bạn đã sẵn sàng chưa?",
        oj: "Code là nghệ thuật. Hãy viết những dòng code đẹp nhất!",
        dev: "Môn này đang được xây dựng. Quay lại sau nhé!",
        dark: "Giao diện tối giúp bảo vệ mắt tốt hơn đó!",
        light: "Sáng sủa và tràn đầy năng lượng!",
        scroll: "Bạn đang tìm kiếm gì ở phía dưới thế?",
        inactive: "Này, bạn vẫn còn đó chứ? Đừng ngủ quên nha!",
        footer: "Cảm ơn bạn đã ghé thăm hệ sinh thái của DNT Team!",
      },
      emotions: {
        neutral: "neutral",
        happy: "happy",
        thinking: "thinking",
        sad: "sad",
        surprised: "surprised",
      },
    },
    subjects: {
      educhem: {
        title: "EDUCHEM - Hóa Học",
        color: "var(--c-chem)",
        content:
          "Khám phá bảng tuần hoàn, cân bằng phản ứng và xem mô phỏng phân tử 3D.",
        features: [
          "Bảng tuần hoàn Interactive",
          "Thư viện phản ứng",
          "Lab ảo 3D",
          "Hệ thống nguyên tố tương tác",
        ],
        status: "active",
        link: "educhem/educhem.html",
        curriculum: ["Vô cơ cơ bản", "Hữu cơ nâng cao", "Hóa lý thuyết"],
      },
      edutech: {
        title: "EDUTECH - Công Nghệ",
        color: "var(--c-tech)",
        content:
          "Tìm hiểu về vi mạch, robotics và các quy trình công nghiệp hiện đại.",
        features: [
          "Sơ đồ mạch điện",
          "Arduino Simulator",
          "IoT Basics",
          "Mô phỏng cơ cấu máy",
        ],
        status: "active",
        link: "edutech/edutech.html",
        curriculum: ["Lắp ráp robot", "Lập trình nhúng", "Tự động hóa"],
      },
      eduoj: {
        title: "EDUOJ - Lập Trình",
        color: "var(--c-infor)",
        content:
          "Nền tảng chấm bài tự động, kho bài tập thuật toán từ cơ bản đến nâng cao.",
        features: [
          "IDE Online đa ngôn ngữ",
          "Chấm bài Real-time",
          "Leaderboard quốc gia",
          "Phân tích độ phức tạp code",
        ],
        status: "active",
        link: "eduoj/eduoj.html",
        curriculum: ["C++ Algorithms", "Python Data Science", "Java Backend"],
      },
      edualge: {
        title: "EDUALGE - Đại Số",
        color: "var(--c-alge)",
        status: "dev",
        content: "Hệ thống giải toán thông minh và trực quan hóa hàm số.",
        curriculum: ["Hàm số bậc nhất", "Logarit", "Tích phân"],
      },
      eduphys: {
        title: "EDUPHYS - Vật Lý",
        color: "var(--c-phys)",
        status: "dev",
        content:
          "Mô phỏng các hiện tượng vật lý trong môi trường không trọng lực.",
        curriculum: ["Cơ học Newton", "Quang hình", "Điện xoay chiều"],
      },
      edubiol: {
        title: "EDUBIOL - Sinh Học",
        color: "var(--c-biol)",
        status: "dev",
        content: "Khám phá thế giới vi sinh và giải phẫu 3D.",
        curriculum: ["Di truyền học", "Hệ sinh thái", "Giải phẫu người"],
      },
      edugeom: {
        title: "EDUGEOM - Hình Học",
        color: "var(--c-geom)",
        status: "dev",
        content: "Hình học không gian và các định lý trực quan hóa.",
        curriculum: ["Khối đa diện", "Mặt cầu", "Hình học tọa độ"],
      },
      eduhis: {
        title: "EDUHIS - Lịch Sử",
        color: "var(--c-hist)",
        status: "dev",
        content: "Tái hiện các trận đánh lịch sử thông qua bản đồ số.",
        curriculum: ["Lịch sử Việt Nam", "Thế chiến II", "Văn minh cổ đại"],
      },
    },
    physics: {
      particleDensity: 0.08, // Hạt trên mỗi pixel vuông
      mouseForce: 100,
      friction: 0.98,
      connectionDist: 150,
    },
  };

  /* ========================================================================
         MODULE 1: AUDIO SYSTEM (UPGRADED)
         ========================================================================
        */
  class AudioSystem {
    constructor() {
      this.muted = true;
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();

      this.btn = document.getElementById("toggle-mute");
      this.control = document.getElementById("audio-control");

      // 🎵 Nhạc nền
      this.bgAudio = new Audio();
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.4;

      this.currentTheme = this.detectTheme();
      this.setBackgroundMusic(this.currentTheme);

      this.initListeners();
      this.observeThemeChange();
    }

    /* ---------------- CORE ---------------- */

    initListeners() {
      if (!this.btn) return;
      this.btn.addEventListener("click", () => {
        this.toggleMute();
        if (this.ctx.state === "suspended") this.ctx.resume();
      });
    }

    toggleMute() {
      this.muted = !this.muted;
      const icon = this.btn.querySelector("i");

      if (this.muted) {
        icon.className = "fas fa-volume-mute";
        this.control.classList.add("muted");
        this.bgAudio.pause();
      } else {
        icon.className = "fas fa-volume-up";
        this.control.classList.remove("muted");
        this.playSuccess();
        this.bgAudio.play().catch(() => {});
      }
    }

    /* ---------------- THEME + MUSIC ---------------- */

    detectTheme() {
      return document.body.classList.contains("dark") ? "dark" : "light";
    }

    setBackgroundMusic(theme) {
      const src = theme === "dark" ? "toi.mp3" : "sang.mp3";
      if (this.bgAudio.src.includes(src)) return;

      this.bgAudio.src = src;
      this.bgAudio.load();

      if (!this.muted) {
        this.bgAudio.play().catch(() => {});
      }
    }

    observeThemeChange() {
      const observer = new MutationObserver(() => {
        const newTheme = this.detectTheme();
        if (newTheme !== this.currentTheme) {
          this.currentTheme = newTheme;
          this.setBackgroundMusic(newTheme);
        }
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    /* ---------------- SFX ---------------- */

    playTone(freq, type = "sine", duration = 0.1, vol = 0.05) {
      if (this.muted || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gainNode.gain.setValueAtTime(vol, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          this.ctx.currentTime + duration,
        );

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.error("Audio error:", e);
      }
    }

    playHover() {
      this.playTone(400, "sine", 0.05, 0.015);
    }
    playClick() {
      this.playTone(800, "triangle", 0.1, 0.04);
    }
    playOpen() {
      this.playTone(300, "sine", 0.4, 0.05);
    }
    playClose() {
      this.playTone(150, "sine", 0.2, 0.05);
    }
    playSuccess() {
      this.playTone(523.25, "sine", 0.1, 0.05);
      setTimeout(() => this.playTone(659.25, "sine", 0.1, 0.05), 100);
      setTimeout(() => this.playTone(783.99, "sine", 0.1, 0.05), 200);
    }
  }

  /* ========================================================================
         MODULE 2: MASCOT SYSTEM (UPGRADED INTELLIGENCE)
         ========================================================================
        */
  class MascotSystem {
    constructor() {
      this.body = document.getElementById("mascot-body");
      this.text = document.getElementById("mascot-text");
      this.timer = null;
      this.idleTimer = null;
      this.isTyping = false;
      this.initIdleCheck();
    }

    say(message, emotion = "neutral") {
      if (!this.text || !this.body || this.isTyping) return;

      this.isTyping = true;
      this.text.textContent = "";
      this.text.classList.add("show");
      this.setEmotion(emotion);

      let i = 0;
      const typeWriter = () => {
        if (i < message.length) {
          this.text.textContent += message.charAt(i);
          i++;
          setTimeout(typeWriter, 30);
        } else {
          this.isTyping = false;
          this.resetIdleTimer();
        }
      };
      typeWriter();

      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (!this.isTyping) {
          this.text.classList.remove("show");
          this.setEmotion("neutral");
        }
      }, 6000);
    }

    setEmotion(type) {
      if (!this.body) return;
      this.body.className = "mascot-body";
      if (type !== "neutral") this.body.classList.add(type);
    }

    initIdleCheck() {
      document.addEventListener("mousemove", () => this.resetIdleTimer());
      document.addEventListener("keypress", () => this.resetIdleTimer());
      this.resetIdleTimer();
    }

    resetIdleTimer() {
      clearTimeout(this.idleTimer);
      this.idleTimer = setTimeout(() => {
        this.say(CONFIG.mascot.messages.inactive, "thinking");
      }, 30000); // 30s không hoạt động
    }
  }

  /* ========================================================================
         MODULE 3: THEME & CANVAS ENGINE (PHYSICS BASED)
         ========================================================================
        */
  class ThemeManager {
    constructor() {
      this.canvas = document.getElementById("bg-canvas");
      this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
      this.particles = [];
      this.mouse = { x: -1000, y: -1000 };
      this.initCanvas();
      this.initListeners();
      this.animate();
    }

    initCanvas() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.particles = [];
      const area = this.canvas.width * this.canvas.height;
      const particleCount = Math.floor(area / 15000);

      for (let i = 0; i < particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          baseX: 0,
          baseY: 0,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          density: Math.random() * 20 + 1,
        });
      }
    }

    initListeners() {
      window.addEventListener("resize", () => this.initCanvas());
      window.addEventListener("mousemove", (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        document.documentElement.style.setProperty(
          "--mouse-x",
          `${e.clientX}px`,
        );
        document.documentElement.style.setProperty(
          "--mouse-y",
          `${e.clientY}px`,
        );
      });
    }

    drawConnections() {
      const isDark = document.body.classList.contains("dark-mode");
      const color = isDark ? "rgba(255, 255, 255," : "rgba(79, 70, 229,";

      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONFIG.physics.connectionDist) {
            const opacity = 1 - distance / CONFIG.physics.connectionDist;
            this.ctx.strokeStyle = `${color} ${opacity * 0.15})`;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
            this.ctx.stroke();
          }
        }
      }
    }

    animate() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const isDark = document.body.classList.contains("dark-mode");
      this.ctx.fillStyle = isDark
        ? "rgba(255,255,255,0.2)"
        : "rgba(79, 70, 229, 0.2)";

      this.particles.forEach((p) => {
        // Physics Calculation
        p.x += p.vx;
        p.y += p.vy;

        // Border Bounce
        if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

        // Mouse Interaction
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx -= (dx / dist) * force * 0.2;
          p.vy -= (dy / dist) * force * 0.2;
        }

        // Draw Particle
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      });

      this.drawConnections();
      requestAnimationFrame(() => this.animate());
    }

    applySubjectTheme(subjectId) {
      const subject = CONFIG.subjects[subjectId];
      if (!subject) return;

      const isDark = document.body.classList.contains("dark-mode");
      const overlayColor = isDark
        ? "rgba(15, 23, 42, 0.9)"
        : "rgba(248, 250, 255, 0.9)";

      anime({
        targets: "body",
        backgroundImage: [
          `linear-gradient(${overlayColor}, ${overlayColor})`,
          `linear-gradient(${overlayColor}, ${overlayColor}), linear-gradient(135deg, ${subject.color}22 0%, transparent 100%)`,
        ],
        easing: "easeOutQuad",
        duration: 500,
      });
    }

    resetTheme() {
      const isDark = document.body.classList.contains("dark-mode");
      const overlayColor = isDark ? "#020617" : "#f8faff";
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = overlayColor;
    }

    toggleDarkMode(mascot) {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      const icon = document.querySelector("#themeToggle i");
      if (icon) icon.className = isDark ? "fas fa-sun" : "fas fa-moon";

      mascot.say(
        isDark ? CONFIG.mascot.messages.dark : CONFIG.mascot.messages.light,
        "happy",
      );
      localStorage.setItem("edumatter-theme", isDark ? "dark" : "light");
      this.resetTheme();
    }
  }

  /* ========================================================================
         MODULE 4: UI CONTROLLER (EXPANDED LOGIC)
         ========================================================================
        */
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.addEventListener("click", () => {
      const link = item.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });

  class UIController {
    constructor(audioSys, mascot, themeMgr) {
      this.audio = audioSys;
      this.mascot = mascot;
      this.themeMgr = themeMgr;

      this.sidebar = document.getElementById("sidebar");
      this.sidebarOverlay = document.getElementById("sidebar-overlay");
      this.modal = document.getElementById("modal-overlay");
      this.modalContent = document.getElementById("modal-dynamic-content");
      this.header = document.getElementById("main-header");
      this.scrollBar = document.getElementById("scroll-bar");

      this.initListeners();
      this.initDynamicUI();
    }

    initListeners() {
      // Header Scroll Logic
      window.addEventListener("scroll", () => this.handleScroll());

      // Sidebar Controls
      const btnOpen = document.getElementById("btn-sidebar-open");
      const btnClose = document.getElementById("btn-sidebar-close");
      if (btnOpen)
        btnOpen.addEventListener("click", () => this.toggleSidebar());
      if (btnClose)
        btnClose.addEventListener("click", () => this.toggleSidebar());
      if (this.sidebarOverlay)
        this.sidebarOverlay.addEventListener("click", () =>
          this.toggleSidebar(),
        );

      // Modal Controls
      const btnCloseModal = document.querySelector(".close-modal");
      if (btnCloseModal)
        btnCloseModal.addEventListener("click", () => this.closeModal());
      if (this.modal) {
        this.modal.addEventListener("click", (e) => {
          if (e.target === this.modal) this.closeModal();
        });
      }
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.modal.style.display === "grid")
          this.closeModal();
      });

      // Theme Switcher
      const themeBtn = document.getElementById("themeToggle");
      if (themeBtn) {
        themeBtn.addEventListener("click", () => {
          this.audio.playClick();
          this.themeMgr.toggleDarkMode(this.mascot);
        });
      }

      // Dev Mode Section Toggle
      const devToggleBtn = document.getElementById("toggle-dev-section");
      if (devToggleBtn) {
        devToggleBtn.addEventListener("click", function () {
          const section = document.getElementById("dev-subjects");
          const isHidden = !section.classList.contains("active");
          if (isHidden) {
            section.classList.add("active");
            this.innerHTML =
              '<i class="fas fa-chevron-up"></i> Ẩn môn đang phát triển';
            window.scrollTo({
              top: section.offsetTop - 100,
              behavior: "smooth",
            });
          } else {
            section.classList.remove("active");
            this.innerHTML =
              '<i class="fas fa-chevron-down"></i> Hiện môn đang phát triển';
          }
        });
      }

      // Subject Cards Interactions
      document.querySelectorAll(".subject-card").forEach((card) => {
        const id = card.getAttribute("data-id");

        card.addEventListener("click", () => {
          this.audio.playClick();
          if (CONFIG.subjects[id] && CONFIG.subjects[id].status === "active") {
            this.openModal(id);
          } else {
            this.mascot.say(CONFIG.mascot.messages.dev, "thinking");
          }
        });

        card.addEventListener("mouseenter", () => {
          this.audio.playHover();
          this.themeMgr.applySubjectTheme(id);

          let msg = CONFIG.mascot.messages.welcome;
          if (id === "educhem") msg = CONFIG.mascot.messages.chem;
          else if (id === "edutech") msg = CONFIG.mascot.messages.tech;
          else if (id === "eduoj") msg = CONFIG.mascot.messages.oj;

          this.mascot.say(msg, id === "educhem" ? "thinking" : "happy");
        });

        card.addEventListener("mouseleave", () => {
          this.themeMgr.resetTheme();
        });
      });

      // Footer Observer for Mascot
      const footer = document.querySelector("footer");
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.mascot.say(CONFIG.mascot.messages.footer, "happy");
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(footer);
    }

    initDynamicUI() {
      // Tự động gán màu cho các icon aura dựa trên data-id
      document.querySelectorAll(".subject-card").forEach((card) => {
        const id = card.getAttribute("data-id");
        const subject = CONFIG.subjects[id];
        if (subject) {
          card.style.setProperty("--card-color", subject.color);
        }
      });
    }

    handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 50) this.header.classList.add("scrolled");
      else this.header.classList.remove("scrolled");

      // Update Progress Bar
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollY / height) * 100;
      if (this.scrollBar) this.scrollBar.style.width = scrolled + "%";

      // Scroll trigger for mascot
      if (scrollY > 1000 && !this.scrolledPastHalf) {
        this.mascot.say(CONFIG.mascot.messages.scroll, "surprised");
        this.scrolledPastHalf = true;
      }
    }

    toggleSidebar() {
      this.audio.playClick();
      const isActive = this.sidebar.classList.toggle("active");
      this.sidebarOverlay.style.display = isActive ? "block" : "none";

      if (isActive) {
        anime({
          targets: ".nav-link",
          translateX: [-50, 0],
          opacity: [0, 1],
          delay: anime.stagger(100, { start: 300 }),
          easing: "easeOutElastic(1, .8)",
        });
      }
    }

    openModal(id) {
      this.audio.playOpen();
      const data = CONFIG.subjects[id];
      if (!data) return;

      const isDark = document.body.classList.contains("dark-mode");

      let htmlContent = `
                <div class="modal-header">
                    <span class="modal-tag" style="background: ${data.color}22; color: ${data.color}">
                        ${data.status === "active" ? "SẴN SÀNG" : "ĐANG PHÁT TRIỂN"}
                    </span>
                    <h2 style="color: ${data.color}">${data.title}</h2>
                </div>
                <div class="modal-body">
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                        <div class="p-4 rounded-3xl" style="background: ${isDark ? "#1e293b" : "#f1f5f9"}">
                            <h3 class="mb-2 font-bold"><i class="fas fa-info-circle mr-2"></i>Tổng quan</h3>
                            <p class="text-sm opacity-80">${data.content}</p>
                        </div>
                        <div class="p-4 rounded-3xl" style="background: ${isDark ? "#1e293b" : "#f1f5f9"}">
                             <h3 class="mb-2 font-bold"><i class="fas fa-graduation-cap mr-2"></i>Lộ trình</h3>
                             <ul class="text-sm opacity-80 list-none">
                                ${data.curriculum ? data.curriculum.map((c) => `<li><i class="fas fa-caret-right mr-2 text-primary"></i>${c}</li>`).join("") : "Chưa cập nhật"}
                             </ul>
                        </div>
                    </div>
                    
                    <h3>Tính năng nổi bật</h3>
                    <div class="grid grid-cols-2 gap-3 mb-8">
                        ${
                          data.features
                            ? data.features
                                .map(
                                  (f) => `
                            <div class="flex items-center p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                                <i class="fas fa-check-circle mr-3" style="color:${data.color}"></i>
                                <span class="text-sm">${f}</span>
                            </div>
                        `,
                                )
                                .join("")
                            : "<p>Đang cập nhật...</p>"
                        }
                    </div>

                    <div class="modal-actions">
                        ${
                          data.status === "active"
                            ? `<a href="${data.link}" class="btn-primary" style="background:${data.color}; flex: 1; text-align: center;">BẮT ĐẦU HỌC NGAY <i class="fas fa-rocket ml-2"></i></a>`
                            : `<button class="btn-primary" style="background:var(--text-muted); cursor:not-allowed; flex:1">SẮP RA MẮT</button>`
                        }
                        <button class="btn-secondary" id="btn-modal-inner-close">ĐÓNG</button>
                    </div>
                </div>
            `;

      this.modalContent.innerHTML = htmlContent;
      this.modal.style.display = "grid";

      // Internal close btn
      const innerClose = document.getElementById("btn-modal-inner-close");
      if (innerClose)
        innerClose.addEventListener("click", () => this.closeModal());

      // Entry animation
      anime({
        targets: ".modal-content",
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutElastic(1, .8)",
      });
    }

    closeModal() {
      this.audio.playClose();
      anime({
        targets: ".modal-content",
        scale: [1, 0.9],
        opacity: [1, 0],
        duration: 300,
        easing: "easeInQuad",
        complete: () => {
          this.modal.style.display = "none";
        },
      });
    }
  }

  /* ========================================================================
         MAIN INITIALIZATION
         ========================================================================
        */
  // 1. Initialize Libraries
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
      mirror: false,
    });
  }

  // 2. Instantiate Systems
  const audioSys = new AudioSystem();
  const mascot = new MascotSystem();
  const themeMgr = new ThemeManager();
  const uiController = new UIController(audioSys, mascot, themeMgr);

  // 3. Persist Theme
  if (localStorage.getItem("edumatter-theme") === "dark") {
    document.body.classList.add("dark-mode");
    const icon = document.querySelector("#themeToggle i");
    if (icon) icon.className = "fas fa-sun";
  }

  // 4. Entry Experience
  window.addEventListener("load", () => {
    setTimeout(() => {
      mascot.say(CONFIG.mascot.messages.welcome, "happy");
    }, 2000);
  });

  // Disable context menu for cleaner UI
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      // e.preventDefault();
    }
  });
});
