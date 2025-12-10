import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не разрешён" });
  }

  const { name, phone, email, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: "Заполните имя и телефон" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"NextMove" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "Новая заявка NextMove 🚚",
      html: `
        <h3>Новая заявка</h3>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "не указан"}</p>
        <p><b>Сообщение:</b><br>${message || "не указано"}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
