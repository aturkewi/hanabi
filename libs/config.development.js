import logger from './logger.js';

module.exports = {
  password: null,
  database: "hanabi_development",
  host: "127.0.0.1",
  params: {
    dialect: "postgres",
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: false
    }
  },
  jwtSecret: "HANABI_DEVELOPMENT",
  jwtSession: {
    session: false
  },
};
