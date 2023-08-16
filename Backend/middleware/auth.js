const Errorhandler = require("../Utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
//const cookies = require("../utils/jwtToken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(400).json({
            message:"Not authorized"
        })
    }
    const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodeData.id);

    next();
});


exports.authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new Errorhandler(
                    //"NOt allow to access ,please check your Role",403
                    `Role:${req.user.role} is not allow to access this resours`, 403
                )
            );
        }  
        next();
    };

};


