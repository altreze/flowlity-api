/**
 * @Author: mouad
 * @Date:   2019-07-31T12:48:47+01:00
 * @Filename: products.js
 * @Last modified by:   mouad
 * @Last modified time: 2019-08-02T00:19:08+01:00
 * @Copyright: Altreze SARL
 */
'use strict';

var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET products listing. */
router.get('/', function(req, res, next) {
  fs.readFile(__dirname + '/products.json', (err, data) => {
      if (err) throw res.status(500).json({
        'message': 'Error reading products file'
      });

      res.status(200).json({
        'data': JSON.parse(data)
      });
  });
});

module.exports = router;
