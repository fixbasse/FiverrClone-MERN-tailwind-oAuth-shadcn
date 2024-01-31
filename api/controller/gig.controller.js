const Gig = require("../models/gig");

//* CREATE
const createGig = async (req, res) => {
    if (!req.isSeller) return res.status(403).send('Only seller can create gig!');

    const newGig = new Gig({
        userId: req.userId,
        ...req.body
    });

    try {
        const savedGig = await newGig.save();
        res.status(201).send(savedGig);
    } catch (error) {
        res.status(500).send('Internal Error');
    };
};

module.exports = { createGig }