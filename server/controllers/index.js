'use strict';

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);
const pry = require('pryjs');

let controllers = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    const fileName = file.split('.')[0];
    controllers[fileName] = require(path.join(__dirname, file));
  });

module.exports = controllers;