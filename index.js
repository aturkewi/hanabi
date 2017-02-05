import express from 'express';
import consign from 'consign';

const app = express();

consign({ verbose: false /* To disable logs created */})
  .include("libs/config.js")
  .then("db.js")
  .then("services/auth")
  .then("libs/middlewares.js")
  .then("routes/api/v1")
  .then("libs/boot.js")
  .into(app);

module.exports = app;
