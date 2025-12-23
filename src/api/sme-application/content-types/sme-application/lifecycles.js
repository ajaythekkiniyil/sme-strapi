export default {
  async afterCreate(event) {
    const { result } = event;
    if (!result) return;

    // Check if this email already existed BEFORE this record
    const count = await strapi.db
      .query("api::sme-application.sme-application")
      .count({
        where: {
          $or: [
            { businessEmail: result.businessEmail },
            { businessNumber: result.businessNumber },
          ],
        },
      });


    /**
     * If count > 1, it means:
     * - This email already existed
     * - Do NOT send admin email
     */
    if (count > 1) {
      return;
    }

    const adminApplicationEmailTemplate =`
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px; 
            border: 1px solid #e5e7eb; 
            border-radius: 12px; 
            color: #374151; 
            line-height: 1.6; 
            background-color: #ffffff;">

        <!-- Header -->
        <div style="text-align: center; padding-bottom: 20px;">
          <h2 style="color: #2563EB; margin-bottom: 6px;">
            New SME Application Submitted
          </h2>
          <p style="font-size: 14px; color: #6B7280; margin-top: 0;">
            Notification from smeoncall.co
          </p>
        </div>

        <div style="border-top: 1px solid #F3F4F6; padding-top: 20px;">

          <p>Hello Admin,</p>

          <p>
            A new SME application has been successfully submitted on
            <strong>smeoncall.co</strong>. Below are the details for your review:
          </p>

          <!-- Application Details Card -->
          <div style="background-color: #F9FAFB; 
                padding: 24px; 
                border-radius: 10px; 
                margin: 25px 0; 
                border: 1px solid #E5E7EB;">

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Applicant Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${result.firstName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Business Email</td>
                <td style="padding: 8px 0; font-weight: 600;">${result.businessEmail}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Business Phone</td>
                <td style="padding: 8px 0; font-weight: 600;">${result.businessNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6B7280;">Submitted On</td>
                <td style="padding: 8px 0; font-weight: 600;">
                  ${new Date(result.createdAt).toLocaleString()}
                </td>
              </tr>
            </table>
          </div>

          <!-- CTA -->
          <p style="font-size: 14px;">
            Please log in to the admin panel to review and take appropriate action on this application.
          </p>

          <!-- Footer -->
          <div style="margin-top: 40px; 
                padding-top: 20px; 
                border-top: 1px solid #F3F4F6; 
                text-align: center;">

            <p style="font-size: 13px; color: #6B7280; margin-bottom: 0;">
              Best regards,<br />
              <strong>The smeoncall Team</strong>
            </p>

            <p style="font-size: 11px; color: #9CA3AF; margin-top: 10px;">
              © smeoncall.co. All rights reserved.
            </p>
          </div>

        </div>
      </div>;`


    // First-time creation → send email
    try {
      await strapi.plugin("email").service("email").send({
        to: process.env.ADMIN_EMAIL_ADDRESS,
        subject: "New SME Application Submitted",
        html: adminApplicationEmailTemplate,
      });
    } catch (err) {
      strapi.log.error("Admin email failed", err);
    }
  },
};
