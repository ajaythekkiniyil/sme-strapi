module.exports = {
  routes: [
    {
      method: 'POST',
      // This path MUST match the URL your Next.js route is hitting: 
      // `${STRAPI_URL}/api/sme-application/send-email`
      path: '/sme-application/send-email',

      // This handler points to the function we defined in the controller file
      handler: 'api::sme-application.sme-application.sendInterviewInvite',

      config: {
        auth: {}, // This defaults to standard Strapi authentication (JWT or API Token)
      },
    },
  ],
};