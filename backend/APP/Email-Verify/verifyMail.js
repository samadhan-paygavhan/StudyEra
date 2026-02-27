import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyMail = async (token, email) => {
  const verifyLink = `http://localhost:5173/api/verify/${encodeURIComponent(token)}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailConfigurations = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Email Verification",
    html: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-top: 6px solid #483D8B;">
        <h2 style="color: #483D8B; text-align: center;">Verify Your Email</h2>
        <p style="color: #666; font-size: 16px; line-height: 1.5;">
          Welcome to <strong>Study Era</strong>! You're almost there. Please click the button below to verify your email address and activate your account.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verifyLink}" target="_blank"
             style="background-color: #6a5acd; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block;">
            Verify Email Address
          </a>
        </div>
      </div>
    </div>`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) {
      throw new Error(error);
    }

    console.log("Email sent successfully");
    console.log(info);
  });
};
