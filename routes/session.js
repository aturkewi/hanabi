// Imported Node Modules
const express = require('express');

// Imported Project Modules
const { session } = require('../controllers');

const router = express.Router();

/**
  NOTE:
    POST /api/v1/session/login
**/
router
  .route('/login')
  .post(session.login);

module.exports = router;
