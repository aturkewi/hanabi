module.exports = {
  database: "hanabi_test",
  username: "",
  password: "",
  params: {
    dialect: "postgres",
    logging: false,
    define: {
      underscored: false
    }
  },
  jwtSecret: "HANABI_TEST",
  jwtSession: {
    session: false
  },
};
