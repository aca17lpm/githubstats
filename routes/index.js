var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Stats' });
});

/* @todo make a POST that supplies the authentication for the Github API */

/* POST on repos */
router.post('/repos', function(req, res, next) {
  /* @todo get token, retrieve JSON and fill repos */
  res.render('repos', { title: 'Github Stats' });
});

module.exports = router;
