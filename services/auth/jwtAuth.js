import JWT from 'jwt-simple';

module.exports = (app) => {
  const jwtSecret = app.libs.config.jwtSecret;

  return {
    currentUser: (req, res, next) => {
      const token = req.headers.authorization.split(" ")[1];
      res.token = JWT.decode(token, jwtSecret);
      next();
    },
  }
};
