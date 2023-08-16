const express = require('express');
const { isAuthenticatedUser } = require('../middleware/auth');
const { getProductDetailsFromUrl, getdatabyuser } = require('../controllers/ProductControllers');

const router = express.Router();

router.route('/getpro/by/url').post(isAuthenticatedUser, getProductDetailsFromUrl) ;
router.route('/getpro/:id').get(isAuthenticatedUser, getdatabyuser) ;
module.exports = router ;