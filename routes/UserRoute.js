const express = require('express');
const { registerUser } = require('../controllers/userController');

const UserRoute = express.Router();

UserRoute.post("/register",registerUser);

module.exports = UserRoute;
