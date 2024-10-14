module.exports = {
  port: process.env.PORT ||5000,
  db: {
    url: process.env.DATABASE_URL,
  },
};
