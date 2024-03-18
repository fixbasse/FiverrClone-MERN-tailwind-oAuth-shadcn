const Gig = require("../models/gig");
const Order = require("../models/order");

//* CREATE 
const createOrder = async (req, res) => {
    const gig = await Gig.findById(req.params.id);

    try {
        const newOrder = new Order({
            gigId: gig._id,
            gigImg: gig.img,
            title: gig.packageName,
            price: gig.price,
            sellerId: gig.userId,
            buyerId: req.userId,
            payment_intent: 'temporary string',
        });

        await newOrder.save();
        res.status(200).send('Success');
    } catch (error) {
        res.status(500).send('Internal Error.');
    }
};

//* GET ALL 
const getAllOrder = async (req, res) => {
    try {
        const order = await Order.find({
            ...(req.isSeller
                ? { sellerId: req.userId }
                : { buyerId: req.userId }),
            isCompleted: true,
        });
        if (!order) return res.status(404).send('No order.');

        res.status(200).send(order);
    } catch (error) {
        res.status(500).send('Internal Error');
    };
};

module.exports = { createOrder, getAllOrder }