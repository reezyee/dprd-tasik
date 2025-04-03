import { defineEventHandler } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    // Validasi input
    if (!name || !email || !subject || !message) {
      return { success: false, message: 'Semua field harus diisi.' }
    }

    // Konfigurasi transporter untuk nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Email developer Anda
        pass: process.env.GMAIL_APP_PASSWORD, // App Password dari Gmail developer Anda
      },
    })

    // Konfigurasi email
    const mailOptions = {
      from: process.env.GMAIL_USER, // Email pengirim (akun developer Anda)
      to: 'zeenajg02@gmail.com', // Email tujuan
      subject: `Pesan Baru: ${subject}`,
      text: `
        Nama: ${name}
        Email: ${email}
        Subjek: ${subject}
        Pesan: ${message}
      `,
      html: `
        <h2>Pesan Baru dari Website DPRD Kota Tasikmalaya</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    }

    // Kirim email
    await transporter.sendMail(mailOptions)

    return { success: true, message: 'Email berhasil dikirim.' }
  } catch (error) {
    console.error('Error sending email with Gmail:', error)
    return { success: false, message: 'Gagal mengirim email.' }
  }
})  