const User = require('../models/user');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

//* REGISTER
const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);

        const newUser = new User({
            ...req.body,
            password: hash
        });

        await newUser.save();

        const alreadyExitUser = await User.findOne({ email: req.body.email });
        if (alreadyExitUser) return res.status(400).send({ message: 'This email is already taken.' });

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

        //* JWT 
        const token = jwt.sign({
            id: user._id,
            email: user.email,
            isSeller: user.isSeller,
        },
            process.env.JWT_SECRET
        );

        const { password, ...userInfo } = user._doc;

        res.cookie('accessToken', token, {
            httpOnly: true,
        }).status(200).send(userInfo);
    } catch (error) {
        res.status(500).send('Internal Error at Login');
    }
};

//* LOGOUT 
const logout = async (req, res) => {
    req.session.destroy(() => {
        req.logout();
    })
    res.clearCookie('connect.sid')

    res.clearCookie('accessToken', {
        sameSite: 'none',
        secure: true,
    }).status(200).send('User has been log out.')
}


module.exports = { register, login, logout }