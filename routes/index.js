var express = require('express');
var router = express.Router();

const octokitService = require('../octokit/octokitService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Stats' });
});

/* POST on repos */
router.post('/repos', function(req, res, next) {
  /* @todo get token, retrieve JSON and fill repos */
  res.render('repos', { title: 'Github Stats' });
});

/* Test */
router.get('/test', async function(req, res, next) {
  const login = await octokitService.test();
});

module.exports = router;
