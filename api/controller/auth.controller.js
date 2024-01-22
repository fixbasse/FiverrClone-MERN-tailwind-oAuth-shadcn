const User = require('../models/user');
const bcrypt = require('bcrypt');

//* REGISTER
const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);

        const newUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save();
        res.status(201).send('User has been created');
    } catch (error) {
        res.status.send('Internal Error');
    }
};


module.exports = { register }