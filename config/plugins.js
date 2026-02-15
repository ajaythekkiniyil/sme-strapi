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

  // 4. Upload Plugin with AWS S3 (R2) Configuration
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("R2_ACCESS_KEY_ID"),
          secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
        },
        region: "auto",
        endpoint: env("R2_ENDPOINT"),
        forcePathStyle: true,
        params: {
          Bucket: env("R2_BUCKET"),
        },
        baseUrl: env("R2_PUBLIC_URL"),
      },
    },
  },

});