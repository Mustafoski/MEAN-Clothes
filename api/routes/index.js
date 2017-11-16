var express = require('express');
var router = express.Router();


var ctrlDresses = require('../controllers/dresses.controller.js');


// Item Routes
router
    .route('/dresses')
    .get(ctrlDresses.dressesGetAll);





module.exports = router;

