const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    url: {
        type: String,
        unique: true
    },
    Title: String,
    Price: String,
    Description: String,
    Ratings: String,
    user: String
});



module.exports = mongoose.model("Product", ProductSchema);