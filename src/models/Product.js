const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        uniqued: true
    },
    description: {
        type: String,
        require: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    }

},{
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema)