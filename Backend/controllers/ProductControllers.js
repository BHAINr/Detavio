const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const axios = require('axios');
const cheerio = require('cheerio');
const Product = require('../models/productModels');

//get data from flipcart url and post in mongodb

exports.getProductDetailsFromUrl = catchAsyncError(async (req, res, next) => {

    const { url } = req.body;
    const user = req.user.id;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const title = $('B_NuCI').text();
        const price = $('._30jeq3._16Jk6d').text();
        const description = $('._1mXcCf RmoJUa').text();
        const ratings = parseFloat($('._2d4LTz').text());
        const productdata = {
            
            'Title': title,
            'Price': price,
            'Description': description,
            'Ratings': ratings,
            user,
            url
        }

        const product =await Product.create(productdata);
        //await product.save();

        return res.status(200).json(productdata);
    } catch (error) {
       // console.log(error);
        res.status(500).json({
            message: "Error in grabing data"
        })
    }

}
)

//get product data by user

exports.getdatabyuser = catchAsyncError(async (req, res, next) => {
    //const user = req.user.id;
    const pro = await Product.findById(req.params.id);
    

    try {
        
        if (pro.user != req.user.id) {
            return res.status(400).json({
                message: "Login with valid id..."
            })
        }

        res.status(200).json({
            sucess: true,
            pro
        })
    } catch (error) {
       // console.log(error);
        res.status(500).json({
            message: "not grabe data.."
        })
    }
})

