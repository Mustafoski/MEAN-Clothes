var mongoose = require('mongoose');

var dressesSchema = new mongoose.Schema({
    
    
    name: {
        type:String,
        required:true
    },
    
    price: Number,
    
    description:String,
    category:String,
    image:String
});

mongoose.model('Dresses', dressesSchema);