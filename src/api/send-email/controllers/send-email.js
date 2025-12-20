'use strict';

module.exports = {
  async send(ctx) {
    const { email } = ctx.request.body;

    // 1. Validation
    if (!email ) {
      return ctx.badRequest('Missing required fields: email and otp are required.');
    }

    try {
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
                ${'9'}
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

      // 2. Attempt to send email
      await strapi.plugins['email'].services.email.send({
        to: email,
        subject: `Verify Your Email Address - ${email}`,
        html: otpEmailTemplate,
      });

      // 3. Success Response
      return ctx.send({
        message: `Verification email sent successfully to ${email}`
      });

    } catch (err) {
      // THIS LOG IS KEY: Check your terminal for this output!
      strapi.log.error('EMAIL_SEND_ERROR:', err);

      return ctx.internalServerError('Failed to send email. Check server logs for provider errors.');
    }
  },
};