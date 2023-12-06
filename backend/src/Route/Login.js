const express=require('express')
const app=express.Router()
const UserController = require('../Controller/Login')

app.post('/register', UserController.registerNewUser)
app.post('/login', UserController.loginUser)
app.post('/logOut', UserController.logOutuser)

module.exports = app