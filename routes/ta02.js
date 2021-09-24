const express = require('express');
const router = express.Router();

const users = ["John", "Caden", "Sarah"];

router.post('/addUser', (req, res, next) => {
  const newUser =  req.body.newUser

  users.push(newUser);

  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;

  const index = users.indexOf(remUser);
  if (index !== -1) {
    users.splice(index, 1);
  }

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: users,
  });
}); 

module.exports = router;


