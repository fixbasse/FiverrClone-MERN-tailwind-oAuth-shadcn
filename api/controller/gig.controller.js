const Gig = require("../models/gig");
const User = require("../models/user");

//* CREATE
const createGig = async (req, res) => {
    if (!req.isSeller) return res.status(403).send('Only seller can create gig!');

    const alreadyExitGig = await Gig.findOne({ title: req.body.title });
    if (alreadyExitGig) return res.status(400).send('This title is already exit!');

    try {
        // const usernameDb = await User.findOne({ username: req.body.username });

        const newGig = new Gig({
            sellerId: req.userId,
            username: req.username,
            ...req.body,
        });

        const savedGig = await newGig.save();

        res.status(201).send(savedGig);
    } catch (error) {
        res.status(500).send('Internal Error');
    };
};

//* GET ALL
const getAllGig = async (req, res) => {
    try {
        const gig = await Gig.find();
        if (!gig) return res.status(404).send('No gig.');

        res.status(200).send(gig);
    } catch (error) {
        res.status(500).send('Internal Error at getAllGig');
    }
};

//* GET By ID
const getGigById = async (req, res) => {
    try {
        const singleGig = await Gig.findById(req.params.id);
        if (!singleGig) return res.status(404).send('Gig not found!');

        res.status(200).send(singleGig);
    } catch (error) {
        res.status(500).send('Internal Error at getGigById');
    };
};

module.exports = { createGig, getAllGig, getGigById }