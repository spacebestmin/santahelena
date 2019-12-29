const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    santaname:{type:String, required: true},
    gift:{type: String, required: true},
    task:{type: String, required: true},
    deadline:{type: String, required:true},
    link:{type:String, required: true},
    //date:{type:Date, required:true},
    
},
{
    timestamp: true,
});

const Gift = mongoose.model('Gift', giftSchema);

module.exports = Gift;
