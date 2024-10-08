const express = require('express')
const router = express.Router()
const { googleOuth } = require('../controllers/authController')
const passport = require('passport')

router.get("/google", passport.authenticate('google', { scope: "profile" }))

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );

module.exports = router