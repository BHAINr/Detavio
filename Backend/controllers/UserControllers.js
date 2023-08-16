const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const ErrorHandler = require("../Utils/errorHandler");
const sendToken = require('../Utils/jwtToken');
//Register User

exports.registerUser = catchAsyncError(async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password
        });
        sendToken(user, 201, res);
    } catch (error) {
        return res.status(404).json({
            message: "try again!"
        })
    }
})

// Login User

exports.loginUser = catchAsyncError(async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({
                message: "not valid user!"
            })
        }
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({
                message: "invalid email and password!"
            })
        }
        const isPasswordMatch = user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: "invalid email and password!"
            })
        }
        sendToken(user, 200, res);
    } catch (error) {
        return res.status(404).json({
            message: "try again!"
        })
    }

})

// Logout User
exports.logOut = catchAsyncError(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        sucess: true,
        message: "Logout Sucessfully..."
    })
})

//Get user Details 
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    sendToken(user, 200, res);
})


