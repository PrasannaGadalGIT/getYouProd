const express = require('express')
const app = express.Router()
const UserController = require('../Controller/User')
app.get('/user/:id', UserController.getUserDetails)

module.exports = app