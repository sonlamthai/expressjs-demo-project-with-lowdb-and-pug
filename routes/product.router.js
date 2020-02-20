const express = require('express');

const router = express.Router();

const controller = require('../controller/product.controller');


router.get('/', controller.showProducts);

module.exports = router