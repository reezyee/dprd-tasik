import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  console.log("📩 Email API Called...");

  try {
    const body = await readBody(event).catch(() => null);

    if (!body) {
      console.error("❌ Request body kosong!");
      return new Response(
        JSON.stringify({ success: false, message: "Invalid request." }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "Semua field harus diisi." }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("📧 Preparing to send email...");

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"DPRD Tasik" <${process.env.GMAIL_USER}>`,
      to: "rezasapitraa@gmail.com",
      subject: `Pesan Baru: ${subject}`,
      text: `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan: ${message}`,
      html: `
        <h2>Pesan Baru dari Website DPRD Kota Tasikmalaya</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    };

    console.log("🚀 Sending email...");

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully!");

    return new Response(
      JSON.stringify({ success: true, message: "Email berhasil dikirim." }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Gagal mengirim email." }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
});
