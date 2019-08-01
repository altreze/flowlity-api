/**
 * @Author: mouad
 * @Date:   2019-07-31T12:48:47+01:00
 * @Filename: products.js
 * @Last modified by:   mouad
 * @Last modified time: 2019-07-31T13:32:01+01:00
 * @Copyright: Altreze SARL
 */

var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    data: [
      {"product_id":1,"product_name":"Bread Crumbs - Panko","date":"09-Oct-2018","inventory_level":16},
      {"product_id":2,"product_name":"Cake - Bande Of Fruit","date":"08-Dec-2018","inventory_level":49},
      {"product_id":3,"product_name":"Salmon - Atlantic, Skin On","date":"28-Feb-2019","inventory_level":36},
      {"product_id":4,"product_name":"Milk - 1%","date":"03-Jan-2019","inventory_level":81},
      {"product_id":5,"product_name":"Orange - Canned, Mandarin","date":"03-Dec-2018","inventory_level":85},
      {"product_id":6,"product_name":"Tea Peppermint","date":"04-Dec-2018","inventory_level":74},
      {"product_id":7,"product_name":"Spice - Peppercorn Melange","date":"15-Nov-2018","inventory_level":9},
      {"product_id":8,"product_name":"Wine - Malbec Trapiche Reserve","date":"01-Oct-2018","inventory_level":13},
      {"product_id":9,"product_name":"Miso - Soy Bean Paste","date":"01-Nov-2018","inventory_level":21},
      {"product_id":10,"product_name":"Chocolate Bar - Oh Henry","date":"09-Feb-2019","inventory_level":30},
      {"product_id":11,"product_name":"Pastry - Baked Cinnamon Stick","date":"09-May-2019","inventory_level":15},
      {"product_id":12,"product_name":"Green Tea Refresher","date":"12-Jul-2019","inventory_level":8},
      {"product_id":13,"product_name":"Tomatoes - Hot House","date":"04-Jan-2019","inventory_level":73},
      {"product_id":14,"product_name":"Ecolab - Lime - A - Way 4/4 L","date":"05-Jul-2019","inventory_level":45},
      {"product_id":15,"product_name":"Onions - Pearl","date":"27-Aug-2018","inventory_level":52},
      {"product_id":16,"product_name":"Straws - Cocktale","date":"08-Mar-2019","inventory_level":55},
      {"product_id":17,"product_name":"Butter Balls Salted","date":"11-Aug-2018","inventory_level":11},
      {"product_id":18,"product_name":"Veal - Nuckle","date":"14-Aug-2018","inventory_level":48},
      {"product_id":19,"product_name":"Oranges","date":"04-Oct-2018","inventory_level":91},
      {"product_id":20,"product_name":"Prunes - Pitted","date":"23-Sep-2018","inventory_level":100},
      {"product_id":21,"product_name":"Ice Cream Bar - Drumstick","date":"18-Oct-2018","inventory_level":37},
      {"product_id":22,"product_name":"Pop Shoppe Cream Soda","date":"16-Nov-2018","inventory_level":86},
      {"product_id":23,"product_name":"Bagelers","date":"24-Oct-2018","inventory_level":10},
      {"product_id":24,"product_name":"Wine - Fontanafredda Barolo","date":"18-May-2019","inventory_level":14},
      {"product_id":25,"product_name":"Syrup - Monin, Irish Cream","date":"08-Nov-2018","inventory_level":100},
      {"product_id":26,"product_name":"Nut - Chestnuts, Whole","date":"05-Jun-2019","inventory_level":61},
      {"product_id":27,"product_name":"Olives - Stuffed","date":"27-Jun-2019","inventory_level":79},
      {"product_id":28,"product_name":"Beef - Top Butt Aaa","date":"06-Aug-2018","inventory_level":94},
      {"product_id":29,"product_name":"Turkey - Ground. Lean","date":"13-Mar-2019","inventory_level":87},
      {"product_id":30,"product_name":"Soup - Campbells, Classic Chix","date":"05-Jun-2019","inventory_level":97},
      {"product_id":31,"product_name":"Rice - Basmati","date":"02-Oct-2018","inventory_level":83},
      {"product_id":32,"product_name":"Cloves - Ground","date":"20-Jan-2019","inventory_level":51},
      {"product_id":33,"product_name":"Soup - Canadian Pea, Dry Mix","date":"20-Mar-2019","inventory_level":18},
      {"product_id":34,"product_name":"Caviar - Salmon","date":"20-Aug-2018","inventory_level":14}
    ]
  });
});

module.exports = router;
