const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;

const ListemSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    text:{
        type:String,
        required: true
    },
    startDate:{
        type: String
    },
    endDate:{
        type: String
    }

})



const Listem = mongoose.model("Listem", ListemSchema);

module.exports = Listem;