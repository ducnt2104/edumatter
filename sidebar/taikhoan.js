/* =========================================================
 * 1. MOCK SERVER (Enhanced)
 * ========================================================= */
class MockServer {
  constructor() {
    this.dbName = "edumatter_ultra_v2";
    this.delay = 500;

    // Init DB if empty
    if (!localStorage.getItem(this.dbName)) {
      this._resetDB();
    }
  }

  _resetDB() {
    const initialData = {
      user: {
        username: "Nguyen Tien Duc",
        email: "ducnt@edumatter.vn",
        phone: "0912 345 678",
        dob: "2000-01-01",
        school: "Đại học Công Nghệ",
        bio: "Đam mê lập trình và giáo dục trực tuyến.",
        joined: "20/12/2024",
        avatar: "",
        role: "student", // 'student' or 'teacher'
      },
      settings: {
        showStats: true,
        showActivity: true,
        showTasks: true,
      },
      classes: [
        {
          id: "C01",
          name: "Giải Tích 1 - K65",
          subject: "Toán Học",
          code: "MATH101",
          members: 120,
          progress: 75,
          owner: "Teacher A",
        },
        {
          id: "C02",
          name: "Vật Lý Đại Cương 1",
          subject: "Vật Lý",
          code: "PHYS102",
          members: 85,
          progress: 40,
          owner: "Teacher B",
        },
        {
          id: "C03",
          name: "Lập trình C++ Cơ bản",
          subject: "Tin Học",
          code: "CS50X",
          members: 200,
          progress: 90,
          owner: "Teacher C",
        },
      ],
      tasks: {
        student: [
          {
            id: 1,
            title: "Nộp bài tập Giải tích chương 3",
            date: "Hôm nay",
            status: "urgent",
          },
          {
            id: 2,
            title: "Ôn tập Vật lý giữa kỳ",
            date: "Ngày mai",
            status: "normal",
          },
          {
            id: 3,
            title: "Đăng ký tín chỉ kỳ tới",
            date: "25/05",
            status: "normal",
          },
        ],
        teacher: [
          {
            id: 1,
            title: "Chấm bài thi cuối kỳ lớp C++",
            date: "Ưu tiên",
            status: "urgent",
          },
          {
            id: 2,
            title: "Soạn giáo án tuần 15",
            date: "Thứ 6",
            status: "normal",
          },
          {
            id: 3,
            title: "Họp hội đồng bộ môn",
            date: "Thứ 2 tới",
            status: "normal",
          },
        ],
      },
    };
    this._write(initialData);
  }

  _read() {
    return JSON.parse(localStorage.getItem(this.dbName));
  }
  _write(data) {
    localStorage.setItem(this.dbName, JSON.stringify(data));
  }

  // --- USER API ---
  async getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const db = this._read();
        resolve({ success: true, data: db.user, settings: db.settings });
      }, this.delay);
    });
  }

  async updateUser(newInfo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const db = this._read();
        db.user = { ...db.user, ...newInfo };
        this._write(db);
        resolve({ success: true, message: "Cập nhật thành công!" });
      }, this.delay);
    });
  }

  async switchRole() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const db = this._read();
        db.user.role = db.user.role === "student" ? "teacher" : "student";
        this._write(db);
        resolve({ success: true, newRole: db.user.role });
      }, 300);
    });
  }

  async updateSettings(key, value) {
    const db = this._read();
    db.settings[key] = value;
    this._write(db);
  }

  // --- CLASS API ---
  async getClasses() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._read().classes), 400);
    });
  }

  // --- TASKS API ---
  async getTasks(role) {
    return new Promise((resolve) => {
      const db = this._read();
      // Return dummy tasks based on role
      resolve(db.tasks[role] || []);
    });
  }

  async addClass(classInfo) {
    return new Promise((resolve) => {
      const db = this._read();
      classInfo.id = "C" + Date.now();
      classInfo.members = 0;
      classInfo.progress = 0;
      db.classes.push(classInfo);
      this._write(db);
      resolve({ success: true, message: "Tạo lớp thành công!" });
    });
  }

  async joinClass(code) {
    return new Promise((resolve) => {
      const db = this._read();
      if (code.length < 3) {
        resolve({ success: false, message: "Mã lớp không hợp lệ!" });
        return;
      }
      const newClass = {
        id: "C" + Date.now(),
        name: "Lớp học mới (" + code + ")",
        subject: "Chuyên đề",
        code: code,
        members: 1,
        progress: 0,
        owner: "Unknown",
      };
      db.classes.push(newClass);
      this._write(db);
      resolve({ success: true, message: "Tham gia lớp thành công!" });
    });
  }

  async deleteClass(id) {
    const db = this._read();
    db.classes = db.classes.filter((c) => c.id !== id);
    this._write(db);
    return { success: true };
  }

  reset() {
    this._resetDB();
  }
}

/* =========================================================
 * 2. UI CONTROLLER
 * ========================================================= */
const server = new MockServer();

const UI = {
  els: {
    roleBadge: document.getElementById("sidebar-role"),
    roleSwitcher: document.getElementById("header-role-text"),
    navClassText: document.getElementById("menu-class-text"),
    dashName: document.getElementById("dash-name"),
    dashAction: document.getElementById("dash-action-text"),
    classList: document.getElementById("class-list"),
    emptyClass: document.getElementById("class-empty"),
    btnAddClass: document.getElementById("btn-add-class"),
    btnClassText: document.getElementById("btn-class-text"),
    statsContainer: document.getElementById("stats-container"),
    taskList: document.getElementById("task-list-container"),
  },

  // Render based on Role
  applyRoleTheme(role) {
    const body = document.body;
    const isTeacher = role === "teacher";

    // CSS Theme
    if (isTeacher) body.classList.add("teacher-mode");
    else body.classList.remove("teacher-mode");

    // Text Updates
    this.els.roleBadge.textContent = isTeacher ? "Giáo Viên" : "Học Viên";
    this.els.roleBadge.style.backgroundColor = isTeacher
      ? "var(--accent)"
      : "var(--primary)";
    this.els.roleSwitcher.textContent = isTeacher
      ? "Chế độ: Giáo viên"
      : "Chế độ: Học sinh";

    this.els.navClassText.textContent = isTeacher
      ? "Lớp đang dạy"
      : "Lớp đã tham gia";
    this.els.dashAction.textContent = isTeacher
      ? "truyền đạt kiến thức"
      : "chinh phục đỉnh cao";
    this.els.btnClassText.textContent = isTeacher
      ? "Tạo lớp mới"
      : "Tham gia lớp";

    // Stats Rendering
    this.renderStats(role);
  },

  renderStats(role) {
    let html = "";
    if (role === "student") {
      html = `
               <div class="stat-card">
                  <span class="stat-num">3</span>
                  <span class="stat-label">Lớp đang học</span>
               </div>
               <div class="stat-card">
                  <span class="stat-num" style="color: var(--success)">9.2</span>
                  <span class="stat-label">GPA Trung bình</span>
               </div>
               <div class="stat-card">
                  <span class="stat-num" style="color: var(--warning)">85%</span>
                  <span class="stat-label">Tỷ lệ hoàn thành</span>
               </div>
             `;
    } else {
      html = `
               <div class="stat-card">
                  <span class="stat-num" style="color: var(--accent)">5</span>
                  <span class="stat-label">Lớp đang dạy</span>
               </div>
               <div class="stat-card">
                  <span class="stat-num" style="color: var(--accent)">405</span>
                  <span class="stat-label">Tổng học sinh</span>
               </div>
               <div class="stat-card">
                  <span class="stat-num" style="color: var(--warning)">12</span>
                  <span class="stat-label">Bài cần chấm</span>
               </div>
             `;
    }
    this.els.statsContainer.innerHTML = html;
  },

  renderTasks(tasks) {
    this.els.taskList.innerHTML = "";
    if (!tasks || tasks.length === 0) {
      this.els.taskList.innerHTML = `<p style="color:#666; text-align:center;">Không có nhiệm vụ nào.</p>`;
      return;
    }

    tasks.forEach((t) => {
      const el = document.createElement("div");
      el.className = `task-item ${t.status}`;
      el.innerHTML = `
                    <div class="task-info">
                        <h4>${t.title}</h4>
                        <p><i class="fa-regular fa-clock"></i> Hạn: ${t.date}</p>
                    </div>
                    <a href="#" class="task-action">Chi tiết</a>
                `;
      this.els.taskList.appendChild(el);
    });
  },

  renderClasses(classes, role) {
    this.els.classList.innerHTML = "";
    if (classes.length === 0) {
      this.els.emptyClass.style.display = "block";
      return;
    }
    this.els.emptyClass.style.display = "none";

    classes.forEach((c) => {
      const el = document.createElement("div");
      el.className = "class-card";
      // Random gradient for banner based on id
      const hue = parseInt(c.id.slice(-3)) % 360;
      // Progress logic (Teacher shows avg progress of class, Student shows their own)
      const progressText = role === "teacher" ? "Tiến độ lớp" : "Hoàn thành";

      el.innerHTML = `
                <div class="class-banner" style="background: linear-gradient(135deg, hsl(${hue}, 60%, 50%), hsl(${
        hue + 40
      }, 60%, 50%))"></div>
                <div class="class-body">
                  <div class="class-name">${c.name}</div>
                  <div class="class-info"><i class="fa-solid fa-book"></i> ${
                    c.subject
                  }</div>
                  <div class="class-info"><i class="fa-solid fa-users"></i> ${
                    c.members
                  } thành viên</div>
                  <div class="class-info" style="font-family: monospace; opacity: 0.7; font-size: 0.8rem;">CODE: ${
                    c.code
                  }</div>
                  
                  <!-- Progress Bar -->
                  <div class="progress-container">
                    <div class="progress-bar" style="width: ${
                      c.progress
                    }%"></div>
                  </div>
                  <div style="font-size: 0.8rem; color: #888; margin-top: -10px; margin-bottom: 15px; display:flex; justify-content:space-between;">
                    <span>${progressText}</span>
                    <span>${c.progress}%</span>
                  </div>

                  <div style="margin-top: auto; display: flex; gap: 10px;">
                    <button class="btn btn-outline btn-sm" style="flex: 1">Vào lớp</button>
                    <button class="btn btn-sm" style="background: rgba(255,60,60,0.1); color: var(--danger)" onclick="App.deleteClass('${
                      c.id
                    }')" title="Rời lớp">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              `;
      this.els.classList.appendChild(el);
    });
  },

  renderChart() {
    const container = document.getElementById("chart-bars");
    container.innerHTML = "";
    // Generate random bars with tooltip
    const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
    for (let i = 0; i < 7; i++) {
      const h = Math.floor(Math.random() * 70) + 30; // Min 30%
      const hours = (h / 10).toFixed(1);

      const col = document.createElement("div");
      col.className = "chart-col";
      col.innerHTML = `
                <div class="chart-tooltip">${hours} giờ</div>
                <div class="chart-bar" style="height: 0%"></div>
            `;
      container.appendChild(col);

      // Animate
      setTimeout(() => {
        col.querySelector(".chart-bar").style.height = h + "%";
      }, 100 * i);
    }
  },

  switchTab(tabName, element) {
    document
      .querySelectorAll(".menu-item")
      .forEach((el) => el.classList.remove("active"));
    element.classList.add("active");
    document
      .querySelectorAll(".panel")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById(`panel-${tabName}`).classList.add("active");

    if (tabName === "classes") App.loadClasses();
  },

  showToast(msg, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon =
      type === "success"
        ? "fa-check-circle"
        : type === "error"
        ? "fa-circle-exclamation"
        : "fa-triangle-exclamation";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  },

  toggleEditProfile() {
    const inputs = [
      "inp-username",
      "inp-email",
      "inp-phone",
      "inp-dob",
      "inp-school",
      "inp-bio",
    ];
    inputs.forEach((id) => (document.getElementById(id).disabled = false));
    document.getElementById("profile-actions").style.display = "flex";
    document.getElementById("btn-edit-profile").style.display = "none";
    // Focus first input
    document.getElementById("inp-username").focus();
  },
  cancelEditProfile() {
    const inputs = [
      "inp-username",
      "inp-email",
      "inp-phone",
      "inp-dob",
      "inp-school",
      "inp-bio",
    ];
    inputs.forEach((id) => (document.getElementById(id).disabled = true));
    document.getElementById("profile-actions").style.display = "none";
    document.getElementById("btn-edit-profile").style.display = "inline-flex";
    App.refreshUserData();
  },
};

/* =========================================================
 * 3. APP LOGIC
 * ========================================================= */
const App = {
  currentUser: null,

  async init() {
    await this.loadUser();
    this.loadClasses();
    UI.renderChart();
    initParticles();
    this.setupEvents();
  },

  setupEvents() {
    // Avatar upload logic
    document
      .getElementById("file-input")
      .addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = async (evt) => {
            document.getElementById("sidebar-avatar").src = evt.target.result;
            await server.updateUser({ avatar: evt.target.result });
            UI.showToast("Cập nhật avatar thành công!");
          };
          reader.readAsDataURL(file);
        }
      });
  },

  async loadUser() {
    const res = await server.getUser();
    if (res.success) {
      this.currentUser = res.data;
      const u = res.data;
      const s = res.settings;

      // Fill UI
      document.getElementById("sidebar-avatar").src =
        u.avatar ||
        `https://ui-avatars.com/api/?name=${u.username}&background=random`;
      document.getElementById("sidebar-name").innerText = u.username;
      UI.els.dashName.innerText = u.username;

      // Fill Profile Form
      document.getElementById("inp-username").value = u.username;
      document.getElementById("inp-email").value = u.email;
      document.getElementById("inp-phone").value = u.phone;
      document.getElementById("inp-dob").value = u.dob;
      document.getElementById("inp-school").value = u.school;
      document.getElementById("inp-bio").value = u.bio;

      // Fill Role
      // document.getElementById("inp-role-display").value = u.role === "teacher" ? "Giáo Viên" : "Học Viên";

      // Apply Settings
      document.getElementById("toggle-stats").checked = s.showStats;
      document.getElementById("toggle-activity").checked = s.showActivity;
      document.getElementById("toggle-tasks").checked = s.showTasks;

      this.toggleWidget("stats", s.showStats);
      this.toggleWidget("activity", s.showActivity);
      this.toggleWidget("tasks", s.showTasks);

      // Apply Theme & Load Role specific data
      UI.applyRoleTheme(u.role);

      // Load Tasks
      const tasks = await server.getTasks(u.role);
      UI.renderTasks(tasks);
    }
  },

  async refreshUserData() {
    this.loadUser();
  },

  async toggleRole() {
    const res = await server.switchRole();
    UI.showToast(`Đã chuyển sang chế độ: ${res.newRole.toUpperCase()}`);
    this.loadUser(); // Reload everything (tasks, classes, stats)
    this.loadClasses();
  },

  async toggleWidget(widgetName, forceState = null) {
    const el = document.getElementById(`widget-${widgetName}`);
    const checkbox = document.getElementById(`toggle-${widgetName}`);
    const isVisible = forceState !== null ? forceState : checkbox.checked;

    if (el) el.style.display = isVisible ? "block" : "none";
    if (forceState === null) {
      // If manually toggled by user
      let key = "showStats";
      if (widgetName === "activity") key = "showActivity";
      if (widgetName === "tasks") key = "showTasks";

      server.updateSettings(key, isVisible);
    }
  },

  async loadClasses() {
    const list = await server.getClasses();
    UI.renderClasses(list, this.currentUser.role);
  },

  async handleClassAction() {
    const isTeacher = this.currentUser.role === "teacher";
    if (isTeacher) {
      // Teacher: Create Class
      const name = prompt("Nhập tên lớp học mới:");
      if (name) {
        const subject = prompt("Nhập môn học:");
        const code = Math.random().toString(36).substring(2, 7).toUpperCase();
        await server.addClass({
          name,
          subject,
          code,
          owner: this.currentUser.username,
        });
        UI.showToast("Đã tạo lớp thành công!");
        this.loadClasses();
      }
    } else {
      // Student: Join Class
      const code = prompt("Nhập mã lớp (Ví dụ: MATH101):");
      if (code) {
        const res = await server.joinClass(code);
        UI.showToast(res.message, res.success ? "success" : "error");
        if (res.success) this.loadClasses();
      }
    }
  },

  async deleteClass(id) {
    if (confirm("Bạn có chắc chắn muốn rời/xóa lớp này?")) {
      await server.deleteClass(id);
      UI.showToast("Đã xóa lớp khỏi danh sách.");
      this.loadClasses();
    }
  },

  async updateProfile() {
    const newData = {
      username: document.getElementById("inp-username").value,
      email: document.getElementById("inp-email").value,
      phone: document.getElementById("inp-phone").value,
      dob: document.getElementById("inp-dob").value,
      school: document.getElementById("inp-school").value,
      bio: document.getElementById("inp-bio").value,
    };
    await server.updateUser(newData);
    UI.showToast("Lưu hồ sơ thành công!");
    UI.cancelEditProfile();
  },

  async changePassword() {
    UI.showToast("Đổi mật khẩu thành công!");
    document.getElementById("old-pass").value = "";
    document.getElementById("new-pass").value = "";
    document.getElementById("confirm-pass").value = "";
  },

  resetData() {
    if (confirm("Xóa toàn bộ dữ liệu và reset về mặc định?")) {
      server.reset();
      location.reload();
    }
  },

  logout() {
    if (confirm("Đăng xuất khỏi hệ thống?"))
      window.location.href = "../index.html";
  },
};

/* =========================================================
 * 4. PARTICLES (VISUAL EFFECT)
 * ========================================================= */
function initParticles() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }

  function init() {
    particles = [];
    const count = Math.floor(window.innerWidth / 20); // More spacing
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isTeacher = document.body.classList.contains("teacher-mode");
    ctx.fillStyle = isTeacher
      ? "rgba(168, 85, 247, 0.4)"
      : "rgba(75, 107, 251, 0.5)";

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize);
  resize();
  draw();
}

// Cursor Follower Logic
const cursor = document.getElementById("custom-cursor");
const follower = document.getElementById("cursor-follower");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  follower.style.left = e.clientX + "px";
  follower.style.top = e.clientY + "px";
});
// Interactive elements hover effect
document
  .querySelectorAll(
    "button, a, .menu-item, input, .change-avatar-btn, .chart-col, .task-item"
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      follower.style.transform = "translate(-50%, -50%) scale(1.8)";
      follower.style.borderColor = "rgba(255,255,255,0.8)";
    });
    el.addEventListener("mouseleave", () => {
      follower.style.transform = "translate(-50%, -50%) scale(1)";
      follower.style.borderColor = "";
    });
  });

// Init
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
