var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    anno: String

  });

  module.exports=postSchema;
