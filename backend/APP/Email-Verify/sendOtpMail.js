import nodemailer from "nodemailer";
import "dotenv/config";

export const sendOtpMail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Password reset OTP",
    html: `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f9; padding: 20px;">
      <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <div style="background-color: #483D8B; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Study Era</h1>
        </div>
        
        <div style="padding: 40px 30px; text-align: center;">
          <h2 style="color: #333; margin-top: 0;">Password Reset Request</h2>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">
            We received a request to reset your password. Use the verification code below to proceed:
          </p>
          
          <div style="margin: 30px 0;">
            <span style="display: inline-block; background-color: #fcfcfd; border: 2px dashed #6a5acd; color: #6a5acd; font-size: 32px; font-weight: bold; padding: 15px 40px; border-radius: 8px; letter-spacing: 8px;">
              ${otp}
            </span>
          </div>
          
          <p style="color: #999; font-size: 14px;">
            This code is valid for <strong>10 minutes</strong>. If you did not request this, please ignore this email or contact support.
          </p>
        </div>
        
        <div style="background-color: #fcfcfd; padding: 20px; text-align: center; border-top: 1px solid #eee;">
          <p style="color: #aaa; font-size: 12px; margin: 0;">
            &copy; 2026 Study Era. All rights reserved. <br>
            Your path to smarter learning.
          </p>
        </div>
      </div>
    </div>
  `,
  };

  await transporter.sendMail(mailOptions);
};
