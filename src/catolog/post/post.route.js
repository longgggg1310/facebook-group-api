var express = require('express');
var router = express.Router();
import * as PostController from './post.controller'


router.get('/:id', PostController.getById)
router.get('/', PostController.getAll)

router.post('/filter', PostController.filter)
// update count watch phone in post
router.put('/count/:id', PostController.updateCount)


module.exports = router;
