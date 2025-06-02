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

const article = [
  {
    "id": 44129480,
    "title": "A man who sailed round the world with a chicken (2019)",
    "url": "https://www.theguardian.com/global/2019/apr/21/why-did-the-chicken-cross-the-globe-french-sailor-guirec-soudee-monique",
    "description": "Meet Monique, for the past five years, she and Guirec Soudée have been sailing around the world. Emma Beddington reveals how the French sailor chose to brave the high seas with just one feathered shipmate",
    "image": "https://i.guim.co.uk/img/media/dabe8105841641e22106f62494bdec3406cb8cf2/0_1993_4912_2948/master/4912.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tYWdlLTIwMTkucG5n&enable=upscale&s=3af8de3f306c5a8f0e3bd0c54080ddd4",
    "favicon": null
  },
  {
    "id": 44155635,
    "title": "LFSR CPU Running Forth",
    "url": "https://github.com/howerj/lfsr-vhdl",
    "description": "An implementation of a CPU that uses a Linear Feedback Shift Register as a Program Counter instead of a normal one - howerj/lfsr-vhdl",
    "image": "https://opengraph.githubassets.com/a8982acfc39b6dc0bedf406cfe5ef4237ab31c3e7ff86d34013991dbb860e43c/howerj/lfsr-vhdl",
    "favicon": null
  },
  {
    "id": 44142359,
    "title": "Writing your own C++ standard library part 2",
    "url": "https://nibblestew.blogspot.com/2025/05/writing-your-own-c-standard-library.html",
    "description": "This blog post  talked about the \"self written C++ standard library\" I wrote for the fun of it ( code here ). The post got linked by Hackern...",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHnzalf3ku3pnatODqLs6qwd3fRsKIfpTTOTuV2O6Jaw4ceN_ISzLOna_7W-5xSGTX7g-CYLVrW4kbFIndCeJwfoYYI-j-qJ4bFhjxCse1Od4Pqa2JimIiPkejj-8YY8ebBE1fp6fTbAY-T3iMKQhwSMAfhm41qOrEM79dPgqB0rqP_ex7Fupagyp_bfw/w1200-h630-p-k-no-nu/Screenshot%20From%202025-05-02%2022-49-16.png",
    "favicon": null
  },
];

(async () => {
  const info = await transporter.sendMail({
    from: '"Test Message" <techglimpse.email@gmail.com>',
    to: "odeardika.app@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: emailTemplate(article), // HTML body
  });

  console.log("Message sent:", info.messageId);
})();


