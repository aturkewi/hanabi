// Imported Node Modules
const express = require('express');

// Imported Project Modules
const usersController = require('../controllers/users.controller');

const router = express.Router();

/**
  NOTE:
    POST /api/v1/users/register
**/
router
  .route('/register')
  .post(usersController.register);

module.exports = router;
