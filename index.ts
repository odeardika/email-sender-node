import nodemailer from 'nodemailer';
import dontenv from 'dotenv';
import emailTemplate from './template/newsMessage';

dontenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  },
});

(async () => {
  const info = await transporter.sendMail({
    from: '"Test Message" <techglimpse.email@gmail.com>',
    to: "odeardika.app@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: emailTemplate(), // HTML body
  });

  console.log("Message sent:", info.messageId);
})();


