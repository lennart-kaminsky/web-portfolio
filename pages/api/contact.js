import nodemailer from "nodemailer";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
  }

  const transmitter_email = process.env.TRANSMITTER_EMAIL;
  const transmitter_password = process.env.TRANSMITTER_PASSWORD;
  const receiver_email = process.env.RECEIVER_EMAIL;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: transmitter_email,
      pass: transmitter_password,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  try {
    const data = request.body;

    const info = await transporter.sendMail({
      from: transmitter_email,
      to: receiver_email,
      replyTo: data.email,
      subject: `Contact via website form from ${data.email}`,
      html: `<p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p> ${data.message}</p>`,
    });

    response.status(201).json({
      messageId: info.messageId,
      status: "Message successfully send!",
    });
  } catch (error) {
    response.status(400).json({ error: error.message });
    console.log(error);
  }
}
