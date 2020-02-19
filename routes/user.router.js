let express = require('express');

const multer  = require('multer');


let router = express.Router();

let validate = require('../validate/user.validate')
let controller = require('../controller/user.controller');

var upload = multer({ dest: './public/uploads/' })

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.viewMem);

router.post('/create',
    upload.single('avatar'),
    validate.createPost, 
    controller.createMem);

module.exports = router;


