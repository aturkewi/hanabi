import logger from './logger.js';

module.exports = {
  password: null,
  database: "hanabi_development",
  host: "127.0.0.1",
  dialect: "postgres",
  define: {
    underscored: false
  },
  jwtSecret: "HANABI_DEVELOPMENT",
  jwtSession: {
    session: false
  },
};
