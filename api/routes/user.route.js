const { getUserById } = require('../controller/user.controller');

const router = require('express').Router();

router.get('/:id', getUserById);

module.exports = router;