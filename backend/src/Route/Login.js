const express=require('express')
const app=express.Router()
const LoginController = require('../Controller/Login')

app.post('/register', LoginController.registerNewUser)
app.post('/login', LoginController.loginUser)
app.post('/logOut', LoginController.logOutuser)

module.exports = app