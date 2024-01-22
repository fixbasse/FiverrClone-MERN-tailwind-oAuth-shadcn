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
        res.status(201).send('User has been created!');
    } catch (error) {
        res.status(500).send('Internal Error at Register');
    }
};

//* LOGIN
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).send('User not found!');

        const pwdCompare = bcrypt.compareSync(req.body.password, user.password);
        if (!pwdCompare) return res.status(400).send('Wrong email or password!');

        const { password, ...userInfo } = user._doc;
        res.status(200).send(userInfo);
    } catch (error) {
        res.status(500).send('Internal Error at Login')
    }
}


module.exports = { register, login }