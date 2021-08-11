const express = require('express');
const path = require('path');
const logger = require('morgan');
const { getAllDoctors } = require('./src/resources/doctors/controller');

const app = express();

// Midlleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/doctors', getAllDoctors);

app.all('*', (req, res) => {
  res.status(404).json({ msg: 'The route is not correct' });
});
module.exports = app;
