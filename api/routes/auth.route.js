const { register, login, logout } = require('../controller/auth.controller');
const { verifyToken } = require('../middleware/jwt');
const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;