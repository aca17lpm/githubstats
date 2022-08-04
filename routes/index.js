/** routes/index.js
 * Manage routing for server
 * */

var express = require('express');
var router = express.Router();

// Get octokit routines from octokitService
const octokitService = require('../octokit/octokitService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Stats' });
});

/* POST on repos */
router.post('/repos', async function(req, res, next) {
  let repoResponse = Object;

  try {
    // Use octokitService.js to communicate with Github API
    repoResponse = await octokitService.getRepos(req.body.username);
  } catch (e) {
    console.log(e);
  } finally {
    res.send(repoResponse.data);
  }

});

/* Test */
router.get('/test', async function(req, res, next) {
  const login = await octokitService.test();
});

module.exports = router;
