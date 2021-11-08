const express = require('express');
const { check } = require('express-validator')
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/login', [
    check('username', "Username is Required").notEmpty(),
    check('password', 'Password is Required').notEmpty(),
], authController.login);

module.exports = router;