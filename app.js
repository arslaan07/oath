const express = require('express')
const app = express()
const connectToDB = require('./config/mongoose-connection')
const authRouter = require('./routes/authRouter')
require('dotenv').config()
const passport = require('passport')
const expressSession = require('express-session')
require('./config/google-strategy')
connectToDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressSession({
    secret: process.env.EXPRESS_SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRouter)

app.listen(3000)