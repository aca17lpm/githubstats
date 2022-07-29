var express = require('express');
var router = express.Router();

const octokitService = require('../octokit/octokitService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Stats' });
});

/* POST on repos */
router.post('/repos', async function(req, res, next) {
  /* @todo get token, retrieve JSON and fill repos */
  console.log(req.body.username);
  const repoResponse = await octokitService.getRepos(req.body.username);
  console.log(repoResponse);
  res.send(repoResponse.data);

  //res.render('repos', { title: 'Github Stats' });
});

/* Test */
router.get('/test', async function(req, res, next) {
  const login = await octokitService.test();
});

module.exports = router;
