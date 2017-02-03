// Imported Node Modules
const express = require('express');

// Imported Project Modules
const { users } = require('../controllers');

const router = express.Router();

/**
  NOTE:
    POST /api/v1/users/register
**/
router
  .route('/register')
  .post(users.register);

module.exports = router;
