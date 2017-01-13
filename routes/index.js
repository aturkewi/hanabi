// Import Node Modules
const express = require('express');

// Declare a router using Express' Router
const router = express.Router();

// Root Route
router.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to Hanabi" });
})

// Export Node Module with our router
module.exports = router;
