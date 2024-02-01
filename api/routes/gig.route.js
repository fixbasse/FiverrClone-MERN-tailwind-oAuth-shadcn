const { createGig, getAllGig } = require('../controller/gig.controller');
const { verifyToken } = require('../middleware/jwt');

const router = require('express').Router();

router.post('/', verifyToken, createGig);
router.get('/', getAllGig);

module.exports = router;