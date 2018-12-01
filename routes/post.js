var postController=require('../controllers/postController');
var express = require('express');
var router = express.Router();


router.post('/',postController.Create);
router.get('/',postController.get);

router.get('/:id',postController.getId);

router.delete('/:id',postController.delete);

module.exports=router;