/**
 1. used for sending Welcome invite mail
 2. used for sending interview invite email
**/

'use strict';

/**
 * sme-application controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sme-application.sme-application', ({ strapi }) => ({

  async sendInterviewInvite(ctx) {

    // this will email to user with default username and password.
    const { username, email, password } = ctx.request.body;
    const loginUrl = 'https://smeoncall.co/sme/login';

    if (username && email && password) {
      try {
        // send welcome mail to new user
        const welcomeEmailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E7EB; border-radius: 8px; color: #333;">
          
          <h2 style="color: #10B981; border-bottom: 2px solid #10B981; padding-bottom: 10px;">
            Welcome to www.smeoncall.co 🎉
          </h2>

          <p>Dear <strong>${username}</strong>,</p>

          <p>
            Welcome to <strong>smeoncall.co</strong>!  
            Your account has been successfully created, and you can now access our platform.
          </p>

          <p>Please use the following credentials to log in:</p>

          <div style="background-color: #F9FAFB; padding: 15px; border-radius: 6px; margin: 25px 0; border-left: 5px solid #10B981;">
            <p style="margin: 5px 0;">
              <strong>👤 Username / Email:</strong> ${email}
            </p>
            <p style="margin: 5px 0;">
              <strong>🔐 Temporary Password:</strong>
              <code style="background: #E5E7EB; padding: 4px 6px; border-radius: 4px;">
                ${password}
              </code>
            </p>
          </div>

          <p>
            For security reasons, please log in and <strong>change your password immediately</strong>.
          </p>

          <a href="${loginUrl}" style="display: block; width: fit-content; margin: 20px 0; background-color: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; text-align: center;">
            Go to Login
          </a>

          <p style="margin-top: 40px; font-size: 13px; color: #6B7280;">
            If you did not request this account or believe this was a mistake, please contact our support team immediately.
          </p>

          <p style="font-size: 13px; color: #6B7280; margin-top: 10px;">
            Best regards,<br/>
            <strong>The smeoncall Team</strong>
          </p>

        </div>
      `;

        await strapi.plugins['email'].services.email.send({
          to: email,
          subject: `Welcome to www.smeoncall.co - ${username}`,
          html: welcomeEmailTemplate,
        });

        ctx.status = 200;
        return ctx.body = {
          message: `Welcome invitation mail send to ${email}`
        };
      }
      catch (err) {
        strapi.log.error('Email dispatch failed:', err);
        return ctx.internalServerError('Failed to send welcome invitation email.');
      }
    }

    const {
      smeName,
      smeEmail,
      date,
      time,
      duration,
      meetingLink
    } = ctx.request.body;

    if (!smeEmail || !date || !time || !meetingLink) {
      return ctx.badRequest('Missing required fields: email, date, time, or meeting link.');
    }

    try {
      const emailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E5E7EB; border-radius: 8px; color: #333;">
          <h2 style="color: #10B981; border-bottom: 2px solid #10B981; padding-bottom: 10px;">Interview Invitation - SME Position</h2>
          <p>Dear <strong>${smeName}</strong>,</p>
          <p>Thank you for your interest. We are pleased to invite you to a virtual interview to discuss your application for the Subject Matter Expert (SME) position.</p>
          
          <div style="background-color: #F9FAFB; padding: 15px; border-radius: 6px; margin: 25px 0; border-left: 5px solid #10B981;">
            <p style="margin: 5px 0;"><strong>📅 Date:</strong> ${date}</p>
            <p style="margin: 5px 0;"><strong>⏰ Time:</strong> ${time} (Timezone not specified, confirm with recruiter)</p>
            <p style="margin: 5px 0;"><strong>⏳ Duration:</strong> ${duration}</p>
          </div>

          <p>Please click the link below to join the meeting at the scheduled time:</p>
          
          <a href="${meetingLink}" style="display: block; width: fit-content; margin: 20px 0; background-color: #10B981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; text-align: center;">
            Join the Video Meeting
          </a>

          <p style="margin-top: 40px; font-size: 13px; color: #6B7280;">
            If you have any conflicts or need to reschedule, please contact us by replying to this email.
          </p>
          <p style="font-size: 13px; color: #6B7280; margin-top: 10px;">
            Best regards,<br/>The Recruitment Team
          </p>
        </div>
      `;

      await strapi.plugins['email'].services.email.send({
        to: smeEmail,
        subject: `Interview Invitation: ${smeName} - SME Application`,
        html: emailTemplate,
      });

      ctx.status = 200; // Force 200 OK
      return ctx.body = {
        message: `Interview invitation sent successfully to ${smeEmail}`
      };

    } catch (err) {
      strapi.log.error('Email dispatch failed:', err);
      return ctx.internalServerError('Failed to send interview invitation email.');
    }
  },
}));