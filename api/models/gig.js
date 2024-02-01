const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    packageName: {
        type: String,
        required: true
    },
    offering: {
        type: String,
        required: true
    },
    delivery: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Gig', gigSchema);