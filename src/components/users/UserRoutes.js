'use strict'
const express = require('express');
const router = express.Router();
const cors = require('cors');

const userController = require('./UserController');

router.post('/signup',[cors()], userController.createUser);
//router.get('/:user_id',[cors()/*,authentication*/], userController.getOneUser);


module.exports = router;
