// Imported Node Modules
const express = require('express');

// Imported Project Modules
const { games } = require('../controllers');
const Auth = require('../services/auth');

const router = express.Router();

/**
  NOTE:
    POST /api/v1/games
**/
router
  .route('/')
  .post(Auth.authorize, games.create);

module.exports = router;
