
const PUBLIC_KEY = "N0px2a7Mmf2X_PSQE";
const SERVICE_ID = "service_zzd88fr";
const TEMPLATE_ID = "template_6llmbnd";

(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);
  }
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const btn = this.querySelector(".btn-submit");
    const originalHTML = btn.innerHTML;
    if (!TEMPLATE_ID || TEMPLATE_ID === "YOUR_TEMPLATE_ID") {
      showToast("Lỗi: Bạn chưa điền chính xác Template ID!", true);
      return;
    }

    btn.innerHTML =
      '<i class="fa-solid fa-circle-notch fa-spin"></i> Đang xử lý...';
    btn.style.opacity = "0.8";
    btn.disabled = true;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(
        function () {
          showToast("Gửi thành công! Chúng tôi đã nhận được thông tin.");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.error("FAILED...", error);
          let errorMsg = "Lỗi kết nối. Vui lòng thử lại sau.";
          if (error.status === 400) {
            errorMsg =
              "Lỗi 400: Không tìm thấy Template ID. Hãy kiểm tra lại cấu hình EmailJS.";
          } else if (error.status === 403) {
            errorMsg = "Lỗi 403: Sai Public Key hoặc Service ID.";
          }

          showToast(errorMsg, true);
        }
      )
      .finally(function () {
        btn.innerHTML = originalHTML;
        btn.style.opacity = "1";
        btn.disabled = false;
      });
  });
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  const icon = toast.querySelector("i");
  const msg = document.getElementById("toast-msg");

  msg.textContent = message;
  toast.className = isError ? "toast error" : "toast";
  icon.className = isError
    ? "fa-solid fa-circle-exclamation"
    : "fa-solid fa-circle-check";

  toast.classList.add("show");
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(200);
  }

  setTimeout(function () {
    toast.classList.remove("show");
  }, 4000);
}
