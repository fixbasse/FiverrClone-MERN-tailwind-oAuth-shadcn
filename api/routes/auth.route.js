const { register } = require('../controller/auth.controller');

const router = require('express').Router();


router.post('/register', register);

module.exports = router;