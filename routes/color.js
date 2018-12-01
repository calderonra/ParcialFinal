var colorController=require('../controllers/colorController');
var express = require('express');
var router = express.Router();


router.post('/',colorController.create);
router.get('/',colorController.getAll);

router.get('/:id',colorController.getByid);

router.delete('/:id',colorController.delete);

module.exports=router;