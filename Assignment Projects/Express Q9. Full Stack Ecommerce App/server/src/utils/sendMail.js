import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  // service: process.env.SMTP_MAIL_SERVICE,
  host: process.env.SMTP_MAIL_HOST,
  port: process.env.SMTP_MAIL_PORT,
  auth: {
    user: process.env.SMTP_MAIL_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
const sendMail = async (options) => {
  const mailOptions = {
    from: process.env.SMTP_MAIL_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
