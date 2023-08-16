const express = require("express");
const { registerUser, loginUser, logOut, getUserDetails, getAllUsers } = require("../controllers/UserControllers");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logOut);
router.route('/userDetail').get(isAuthenticatedUser ,getUserDetails);


module.exports = router;
