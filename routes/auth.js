const express = require('express');
const {body} = require('express-validator');

const {signup} = require('../controllers/auth');

const router = express.Router();

router.post("/signup",[
    body('email', "Please enter a valid email").isEmail(),
    body('phone', "Please enter a valid phone number with 10 digits").isLength({min: 10, max: 10}),
    body('password').isLength({min: 6}).withMessage("Password should be at least 6 characters long").matches(/\d/).withMessage("Password should contain both letters and numbers")
], signup);

module.exports = router;