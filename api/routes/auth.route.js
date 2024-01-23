const { register, login } = require('../controller/auth.controller');
const { verifyToken } = require('../middleware/jwt');
const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;