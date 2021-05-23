const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    full_name :{
        type : String,
        required: true
    },
    email:{
        type: String,
        required :true,
        unique :true,
        lowercase:true
    },
    password:{
        type:String,
        required: true
    },
    registeration_date:{
        type: String,
        default:Date.now
    }

})

module.exports = User = mongoose.model('user',UserSchema);