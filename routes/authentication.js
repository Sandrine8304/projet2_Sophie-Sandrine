const express = require('express');
const router = express.Router();

const passport = require('passport');
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
  successRedirect : 'monespace/mon-accueil',
  failureRedirect : '/login',
  failureFlash : true
}));

// router.post('/login', (req, res, next) => {
//   passport.authenticate("local", (err, theUser, failureDetails) => {
//     if (err) {
//       // Something went wrong authenticating user
//       return next(err);
//     }
  
//     if (!theUser) {
//       // Unauthorized, `failureDetails` contains the error messages from our logic in "LocalStrategy" {message: '…'}.
//       res.render('authentication/login', {errorMessage: 'Wrong password or username'}); 
//       return;
//     }

//     // save user in session: req.user
//     req.login(theUser, (err) => {
//       if (err) {
//         // Session save went bad
//         return next(err);
//       }

//       // All good, we are now logged in and `req.user` is now set
//       res.redirect('monespace/mon-accueil');
//     });
//   })(req, res, next);
// });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;