// Imported Node Modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Define express app
const app = express()

// Set Middleware
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}

// Use bodyParser to convert req.body into JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Import Routes
const { users, session } = require('./routes/index');


// Use our router index file as our base route for the api
app.use('/api/v1/users', users);
app.use('/api/v1/session', session);

// A catch all route with a 404 err.status that is passed with an error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler setup
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });
}

// Production Error handler setup
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
