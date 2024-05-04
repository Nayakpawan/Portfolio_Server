const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "pawannayak0720@gmail.com",
    pass: "xnjdliodldokgdsu",
  },
});

async function sendMail(to, subject, text, html) {
  // Send mail to user
  await transporter.sendMail({
    from: 'pawannayak0720@gmail.com',
    to,
    subject,
    text,
    html
  });

  // Send text message to admin
  const adminEmail = 'pawannayak0720@gmail.com'; // Replace with your admin's email address
  await transporter.sendMail({
    from: 'pawannayak0720@gmail.com',
    to: adminEmail,
    subject: `New message from ${to}`,
    text: `You have received a new message from ${to}. Message content: ${text}`,
    html: `<p>You have received a new message from ${to}.</p><p>Message content: ${text}</p>`
  });
}

module.exports = { sendMail };
