const {validationResult} = require('express-validator');

const User = require('../models/User');

exports.signup = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array(),
        });
    }
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: err,
            });
        }
        res.json({
            name: user.first_name,
            phone: user.phone,
            email: user.email,
            id: user._id
        });
    })
}