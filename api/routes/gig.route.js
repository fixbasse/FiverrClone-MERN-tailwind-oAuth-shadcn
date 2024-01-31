const { createGig } = require('../controller/gig.controller');

const router = require('express').Router();

router.post('/', createGig);

module.exports = router;