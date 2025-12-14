module.exports = ({ env }) => ({
  // 1. Documentation Plugin
  'documentation': {
    enabled: true,
  },

  // 2. Users-Permissions Plugin
  'users-permissions': {
    config: {
      register: {
        allowedFields: ["role", "customRole"],
      },
    },
  },

  // 3. Email Plugin
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true, // Add this line for Port 465
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // Sometimes Hostinger requires this to bypass local cert issues
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env('SMTP_USERNAME'),
        defaultReplyTo: env('SMTP_USERNAME'),
      },
    },
  },

});