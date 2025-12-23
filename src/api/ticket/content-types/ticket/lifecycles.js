module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      // 1. Define the 'from' address using the new recommended syntax
      const defaultFrom = strapi.config.get('plugin::email.settings.defaultFrom');

      const emailTemplate =
        `<div style="
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background-color: #ffffff;
            color: #374151;
            line-height: 1.6;
          ">

          <!-- Header -->
          <div style="text-align: center; padding-bottom: 20px;">
            <h2 style="color: #2563EB; margin-bottom: 6px;">
              New Support Ticket Submitted
            </h2>
            <p style="font-size: 14px; color: #6B7280; margin-top: 0;">
              Notification from smeoncall.co
            </p>
          </div>

          <div style="border-top: 1px solid #F3F4F6; padding-top: 20px;">

            <p>Hello Admin,</p>

            <p>
              A new support ticket has been created on <strong>smeoncall.co</strong>.
              The details are outlined below for your review:
            </p>

            <!-- Ticket Details -->
            <div style="
              background-color: #F9FAFB;
              padding: 24px;
              border-radius: 10px;
              margin: 24px 0;
              border: 1px solid #E5E7EB;
            ">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;">User Email</td>
                  <td style="padding: 8px 0; font-weight: 600;">${result.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;">Topic</td>
                  <td style="padding: 8px 0; font-weight: 600;">${result.topic}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;">Urgency</td>
                  <td style="padding: 8px 0; font-weight: 600;">${result.urgency}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B7280;">Submitted On</td>
                  <td style="padding: 8px 0; font-weight: 600;">
                    ${new Date(result.createdAt).toLocaleString()}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Problem Statement -->
                <div style="margin-top: 10px;">
                  <p style="font-weight: 600; margin-bottom: 6px;">
                    Problem Statement
                  </p>
                  <div style="
              background-color: #FFFFFF;
              border: 1px solid #E5E7EB;
              border-radius: 8px;
              padding: 16px;
              font-size: 14px;
              color: #374151;
            ">
                    ${result.problemStatement}
                  </div>
            </div>

            <p style="margin-top: 24px; font-size: 14px;">
              Please log in to the admin dashboard to review and respond to this ticket.
            </p>

                <!-- Footer -->
                <div style="
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #F3F4F6;
            text-align: center;
              ">
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

      await strapi.plugins.email.services.email.send({
        to: process.env.ADMIN_EMAIL_ADDRESS,
        from: defaultFrom,
        subject: `New Ticket: ${result.topic}`,
        html: emailTemplate,
      });
    } catch (err) {
      strapi.log.error('Email Plugin Error:', err);
    }
  },
};