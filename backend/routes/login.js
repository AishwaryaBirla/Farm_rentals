const router = require('express').Router();
let Login = require('../models/login.model');
//const { default: login } = require('../../src/Components/Login/Login');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/login').post((req, res) => {
  const fullname = req.body.fullname;
  const newLogin = new Login({fullname});
  console.log(newLogin+'ok');
  newLogin.save()
    .then(() => res.json('User added!'))
    .catch(err => console.log(err));
  console.log(Login.find().fullname);
});

module.exports = router;