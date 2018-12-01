var postController=require('../controllers/colorController');
var express = require('express');
var router = express.Router();


router.post('/',postController.create);
router.get('/',postController.getAll);

router.get('/:id',postController.getByid);

router.delete('/:id',postController.delete);

module.exports=router;