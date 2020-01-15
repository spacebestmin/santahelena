const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const santaSchema = new Schema({
    santaname: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        minlength: 3,
    },
},
    {
        timestamp:true,
    }
);

const Santa = mongoose.model('Santa', santaSchema);
module.exports = Santa;
