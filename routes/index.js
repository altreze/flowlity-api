/**
 * @Author: mouad
 * @Date:   2019-07-31T12:48:47+01:00
 * @Filename: index.js
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-02T00:06:13+01:00
 * @Copyright: Altreze SARL
 */
'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Welcome to flowlity restful api' });
});

module.exports = router;
