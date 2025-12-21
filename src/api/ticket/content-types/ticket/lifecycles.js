module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      // 1. Define the 'from' address using the new recommended syntax
      const defaultFrom = strapi.config.get('plugin::email.settings.defaultFrom');

      await strapi.plugins.email.services.email.send({
        to: 'smeoncallofficial@gmail.com',
        from: defaultFrom, 
        subject: `New Ticket: ${result.topic}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #2563eb;">New Ticket Created</h2>
            <p><strong>User:</strong> ${result.username}</p>
            <p><strong>Topic:</strong> ${result.topic}</p>
            <p><strong>Urgency:</strong> ${result.urgency}</p>
            <hr />
            <p><strong>The Problem Statement:</strong></p>
            <p>${result.problemStatement}</p>
            <br />
          </div>
        `,
      });
    } catch (err) {
      strapi.log.error('Email Plugin Error:', err);
    }
  },
};