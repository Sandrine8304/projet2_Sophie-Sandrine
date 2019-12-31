const express = require('express');
const router = express.Router();

const passport = require('passport');
const User = require('../models/famille.js'); // user = famille

const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

const uploadCloud = require('../config/cloudinary.js');

// Profil 
router.get('/profil', (req, res, next) => {
  if (!req.user) {
    res.redirect('authentication/login'); // not logged-in
    return;
  }
  res.render('monespace/profil', { user: req.user }); 
  
});


module.exports = router;