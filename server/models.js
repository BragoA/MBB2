const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/BeltRetakeDB', {useNewUrlParser : true});

const productSchema = new mongoose.Schema({
    name: {type: String, minlength: 3, required: true},
    price: {type: Number, min: 0, required: true},
    quantity: {type: Number, min: 0, required: true},
    customId: {type: Number, required: true}
})

module.exports = mongoose.model("Product", productSchema)