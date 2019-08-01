/**
 * @Author: mouad
 * @Date:   2019-07-31T12:48:47+01:00
 * @Filename: app.js
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-02T00:06:20+01:00
 * @Copyright: Altreze SARL
 */
'use strict';

var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// instantiating the app
var app = express();

// CORS
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Content-Type configuration
app.use('/', function(req, res, next) {
  var contype = req.headers['content-type'];
  if (!contype || contype.indexOf('application/json') !== 0) {
      return res.sendStatus(400);
    }
  next();
});

// Defining routes
app.use('/api', require('./routes/index'));
app.use('/api/products', require('./routes/products'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error message
  res
    .status(err.status || 500)
    .json({message: 'error'});
});

module.exports = app;
