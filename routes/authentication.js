const express = require('express');
const router = express.Router();

const passport = require('passport');
const ensureLogin = require("connect-ensure-login");
const User = require('../models/famille.js'); // user = famille

const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

const uploadCloud = require('../config/cloudinary.js');

// Signup process 
router.get('/signup', (req, res) => {
  res.render('authentication/signup', { message: req.flash('error')});
});

router.post("/signup", (req, res, next) => {  //uploadCloud.single('photo')
  const username = req.body.username;
  const password = req.body.password;
  const nom = req.body.nom;
  const email = req.body.email;


  // 1. Check username and password are not empty
  if (username === "" || password === "") {
    res.render("authentication/signup", { errorMessage: "Indicate username and password" });
    return;
  }

  User.findOne({ username })
    .then(user => {
      // 2. Check user does not already exist
      if (user) {
        res.render("authentication/signup", { errorMessage: "The username already exists" });
        return;
      }

      // Encrypt the password
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      //
      // Save the user in DB
      //

      const newUser = new User({
        username,
        password: hashPass,
        nom,
        email,
      });

      newUser.save()
        .then(user => {
          // save user in session: req.user
          req.login(user, err => {
            if (err) return next(err); // Session save went bad

            res.redirect('/'); // All good, we are now logged in and `req.user` is now set
          });
        })
        .catch(err => next(err))
      ;
        
    })
    .catch(err => next(err))
  ;
});


//Login process
router.get('/login', (req, res) => {
  res.render('authentication/login', { message: req.flash('error')});
});


router.post('/login', passport.authenticate('local', {
  successRedirect : '/mon-accueil',
  failureRedirect : '/login',
  failureFlash : true
}));


//Routes pour mon-accueil (private page)
router.get("/mon-accueil", (req, res) => {
  if (!req.user) {
    res.redirect('authentication/login'); // not logged-in
    return;
  }

  // ok, req.user is defined
  res.render("authentication/mon-accueil", { user: req.user });
});

//Profil (private page)
router.get("/profil", (req, res) => {
  if (!req.user) {
    res.redirect('authentication/login'); // not logged-in
    return;
  }

  // ok, req.user is defined
  res.render("authentication/profil", { user: req.user });
});

//Editer Profil (private page)
router.get("/edit-profil", (req, res) => {
  if (!req.user) {
    res.redirect('authentication/login'); // not logged-in
    return;
  }

  // ok, req.user is defined
  res.render("authentication/edit-profil", { user: req.user });
});

router.post("/edit-profil", (req, res, next) => {
  // Encrypt the password
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(req.body.password, salt);

  if (req.user) {
  User.updateOne({ _id: req.body._id }, { $set : {
    username: req.body.username,
    name: req.body.name,
    password: hashPass,
    nom: req.body.nom,
    adresse: req.body.adresse,
    telephone1: req.body.telephone1,
    telephone2: req.body.telephone2,
    telephone3: req.body.telephone3,
  }})
    .then(user => res.redirect('/mon-accueil'))
    .catch(err => next(err))
  ;
  }
});


//Absence adherent (private page)
router.get("/absence", (req, res) => {
  if (!req.user) {
    res.redirect('authentication/login'); // not logged-in
    return;
  }

  // ok, req.user is defined
  res.render("authentication/absence", { user: req.user });
});


//Log out
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});



module.exports = router;