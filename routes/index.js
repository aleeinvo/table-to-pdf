var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  const users = [
    {
      name: 'Ali',
      email: 'alee@gmail.com',
      city: 'Lahore'
    },
    {
      name: 'Bilal',
      email: 'bilal@gmail.com',
      city: 'Bahawalpur'
    },
    {
      name: 'Amns',
      email: 'amna@gmail.com',
      city: 'Sadar'
    }
  ];
  res.render('index', { title: 'Express', users });
});

module.exports = router;
