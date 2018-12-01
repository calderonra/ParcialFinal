var postController=require('../controllers/postController');
var express = require('express');
var router = express.Router();


router.get('/',postController.Create);
