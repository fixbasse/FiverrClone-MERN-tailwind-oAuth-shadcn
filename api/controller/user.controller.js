const User = require('../models/user');

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id || req.params.googleId);
        if (!user) return res.status(404).send('No user!');

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send('Internal Error');
    }
};

module.exports = { getUserById }