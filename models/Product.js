const mongoose = require('mongoose');





const productSchema = new mongoose.Schema({
    sex: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    photos: {
        type: String,
        required: true
    },

})


const Product = mongoose.model("shop", productSchema)

module.exports = Product;