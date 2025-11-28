const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// GỬI EMAIL TỚI BẠN
// ===============================
app.post("/send-report", async (req, res) => {
  const { name, email, type, message } = req.body;

  try {
    // Tạo transporter gửi Gmail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ducnt21042010@gmail.com", // Email bạn
        pass: "fqap aqvz qfte clgw", // Quan trọng — tui hướng dẫn dưới
      },
    });

    // Nội dung email gửi cho bạn
    let mailOptions = {
      from: email || "Người dùng không ghi email",
      to: "ducnt21042010@gmail.com",
      subject: `[BÁO CÁO] Loại: ${type}`,
      text: `
Người gửi: ${name}
Email: ${email}
Loại báo cáo: ${type}

Nội dung:
${message}
            `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Báo cáo đã được gửi thành công!" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Lỗi khi gửi báo cáo!" });
  }
});

app.listen(3000, () => {
  console.log("Server chạy tại: http://localhost:3000");
});
