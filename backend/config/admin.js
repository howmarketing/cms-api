module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac2e1cb4f955ef8daecc8295b938e4c4'),
  },
});
