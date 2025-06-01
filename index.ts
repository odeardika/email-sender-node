import nodemailer from 'nodemailer';
import dontenv from 'dotenv';

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
    to: "bar@example.com, baz@example.com, dirfanardika@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
})();


