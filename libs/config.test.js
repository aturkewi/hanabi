module.exports = {
  password: null,
  database: "hanabi_test",
  host: "127.0.0.1",
  dialect: "postgres",
  logging: false,
  define: {
    underscored: false
  },
  jwtSecret: "HANABI_DEVELOPMENT",
  jwtSession: {
    session: false
  },
};
