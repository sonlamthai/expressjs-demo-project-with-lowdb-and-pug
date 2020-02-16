let express = require('express');

let router = express.Router();

let controller = require('../controller/user.controller');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.viewMem);

router.post('/create', controller.createMem)

module.exports = router;


