const express = require('express');

const router = express.Router();

const controller = require('../controller/transfer.controller');


router.get('/', controller.transfer);

router.post('/', controller.postTransfer);

module.exports = router;