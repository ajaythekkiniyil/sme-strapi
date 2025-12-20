module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/auth/send-otp',
      handler: 'email-otp.sendOtp',
      config: { auth: false }
    },
    {
      method: 'POST',
      path: '/auth/verify-otp',
      handler: 'email-otp.verifyOtp',
      config: { auth: false }
    }
  ]
};