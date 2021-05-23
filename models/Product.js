const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    price:Number,
    image_url : String,
});

module.exports = mongoose.model("Product",schema);