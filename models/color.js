var mongoose = require('mongoose');

var colorSchema = new mongoose.Schema({
    nombre: String,
    hexa: String,
    bits: String

  });

  module.exports=mongoose.model('Color',colorSchema);
