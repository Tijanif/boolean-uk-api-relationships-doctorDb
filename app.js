const express = require('express');
const logger = require('morgan');

const app = express();

// Routes

// Midlleware
app.use(logger('dev'));
app.use(express.json());

module.exports = app;
