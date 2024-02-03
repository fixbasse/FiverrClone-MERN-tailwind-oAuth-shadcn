const { createGig, getAllGig, getGigById } = require('../controller/gig.controller');
const { verifyToken } = require('../middleware/jwt');

const router = require('express').Router();

router.post('/', verifyToken, createGig);
router.get('/', getAllGig);
router.get('/single-product/:id', getGigById);

module.exports = router;