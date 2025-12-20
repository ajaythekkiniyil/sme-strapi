module.exports = {
  async afterCreate(event) {

    const { result } = event; // The newly created entry's data

    try {
      // 1. Get the newly submitted data
      const entryTitle = 'New enquiry form submission.';

      // 2. Define the email payload
      const emailOptions = {
        to: 'ajaythekkiniyi@gmail.com',
        from: strapi.config.get('plugin.email.settings.defaultFrom'), // ⬅️ Automatically uses your 'onboarding@resend.dev'
        subject: `${entryTitle}`,
        text: `A new form submission has been received.

Title: ${entryTitle}
ID: ${result.id}

---
View the submission in the Strapi admin panel.
`,
        html: `
          <h1>A New Submission Has Arrived!</h1>
          <p>Details of the new entry:</p>
          <ul>
            <li><strong>Title/Name:</strong> ${entryTitle}</li>
            <li><strong>ID:</strong> ${result.id}</li>
            </ul>
          <p>Please log into the Strapi admin panel to review the full details.</p>
        `,
      };

      // 3. Send the email using the Strapi Email Plugin
      await strapi.plugins.email.services.email.send(emailOptions);

    } catch (err) {
      // Log any errors if the email fails to send
    }
  },
};