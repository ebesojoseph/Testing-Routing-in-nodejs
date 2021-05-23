const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image_url : {
        type:String,
        required:true,
    },
    category:{
        type:Schema.Types.ObjectId,
         ref:"category",
         required:true
    },
    date_added :{
        type : Date,
        default:Date.now
    },
    user :{
        type:Schema.Types.ObjectId,
        ref : "user",
        required : true,
    }
});

module.exports = Product = mongoose.model("product",schema);