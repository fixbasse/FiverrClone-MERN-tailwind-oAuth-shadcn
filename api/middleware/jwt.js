const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send('You are not authenticated!');

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) return res.status(403).send('Token is not valid!');

        req.userId = payload.id;
    })
};

module.exports = { verifyToken }