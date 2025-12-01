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

  // 3. Email Plugin (using Resend via Nodemailer)
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.resend.com',
        port: 465,
        secure: true,
        auth: {
          user: 'resend',
          // Securely loads the key from the .env file
          pass: env('RESEND_API_KEY'), 
        },
      },
      settings: {
        defaultFrom: env('MAIL_DEFAULT_FROM', 'onboarding@resend.dev'),
        defaultReplyTo: 'admin@yourdomain.com',
      },
    },
  },
});