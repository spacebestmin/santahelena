const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    username:{type:String, required: true},
    cause:{type: String, required: true},
    link:{type:String, required: true},
    
},
{
    timestamp: true,
});

const Gift = mongoose.model('Gift', giftSchema);

model.exports = Gift;

