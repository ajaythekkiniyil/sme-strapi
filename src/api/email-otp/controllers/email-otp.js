const crypto = require('crypto');

const OTP_UID = 'api::email-otp.email-otp';

const hashOtp = (otp) =>
  crypto.createHash('sha256').update(otp).digest('hex');

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

module.exports = {
  async sendOtp(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest('Missing required fields');
    }

    // Prevent email enumeration
    const existingUser = await strapi
      .query('plugin::users-permissions.user')
      .findOne({ where: { email } });

    if (existingUser) {
      return ctx.send({ message: 'OTP sent if email exists' });
    }

    const otp = generateOtp();
    const otpHash = hashOtp(otp);

    await strapi.documents(OTP_UID).create({
      data: {
        email,
        otpHash,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
        used: false
      }
    });

    const otpEmailTemplate =
      `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; color: #374151; line-height: 1.6;">
          <div style="text-align: center; padding-bottom: 20px;">
            <h2 style="color: #10B981; margin-bottom: 5px;">Verify Your Email Address</h2>
            <p style="font-size: 14px; color: #6B7280; margin-top: 0;">Secure access to smeoncall.co</p>
          </div>

          <div style="border-top: 1px solid #F3F4F6; padding-top: 20px;">
            <p>Hello,</p>
            <p>Thank you for signing up with <strong>smeoncall.co</strong>. To complete your registration and ensure your account is secure, please use the verification code provided below:</p>

            <div style="background-color: #F9FAFB; padding: 30px; border-radius: 10px; margin: 25px 0; text-align: center; border: 1px dashed #10B981;">
              <span style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6B7280; margin-bottom: 10px;">Your Verification Code</span>
              <code style="font-size: 32px; font-weight: bold; color: #10B981; letter-spacing: 5px;">
                ${otp}
              </code>
            </div>

            <p style="font-size: 14px; color: #4B5563;">
              This code is valid for <strong>10 minutes</strong>. For your security, please do not share this code with anyone.
            </p>

            <p style="margin-top: 30px; font-size: 13px; color: #9CA3AF;">
              If you didn't request this code, you can safely ignore this email. Someone may have entered your email address by mistake.
            </p>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #F3F4F6; text-align: center;">
              <p style="font-size: 13px; color: #6B7280; margin-bottom: 0;">
                Best regards,<br />
                <strong>The smeoncall Team</strong>
              </p>
              <p style="font-size: 11px; color: #9CA3AF; margin-top: 10px;">
                © smeoncall.co. All rights reserved.
              </p>
            </div>
          </div>
        </div>`
      ;

    await strapi.plugin('email').service('email').send({
      to: email,
      subject: 'Your Email Verification OTP',
      html: otpEmailTemplate
    });

    ctx.send({ message: 'OTP sent', status: '200' });
  },

  async verifyOtp(ctx) {
    const { email, otp, username, password } = ctx.request.body;

    const records = await strapi.documents(OTP_UID).findMany({
      filters: {
        email,
        used: false,
        expiresAt: { $gt: new Date() }
      },
      sort: { createdAt: 'desc' },
      limit: 1
    });

    if (!records.length) {
      return ctx.badRequest('Invalid or expired OTP');
    }

    const isValid = hashOtp(otp) === records[0].otpHash;
    if (!isValid) {
      return ctx.badRequest('Invalid OTP');
    }

    // Mark OTP as used
    await strapi.documents(OTP_UID).update({
      documentId: records[0].documentId,
      data: { used: true }
    });

    const userRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({
        where: { type: 'authenticated' }
      });

    // Create verified user
    await strapi
      .plugin('users-permissions')
      .service('user')
      .add({
        email,
        username,
        password,
        confirmed: true,
        customRole: 'user',
        role: userRole.id
      });

    ctx.send({ status: '200' });
  }
};
