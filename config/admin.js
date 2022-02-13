module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a73cb4baf8d637a23723fe5d2d99fe27'),
  },
});
