/** octokitService.js
 *  Wrapper for routines using the octokit package for the Github API
 */
const { Octokit, App } = require("octokit");

// supply authentication on server startup
const githubAuth = process.env.GITHUB_KEY;
const octokit = new Octokit({auth: githubAuth});

class octokitService {

    static async test(){
        const { data: { login }, } = await octokit.rest.users.getAuthenticated();
        console.log("Hello, %s", login);
    }

    /* Use octokit rest API to retrieve all public repositories*/
    static async getRepos(username) {
        return await octokit.rest.repos.listForUser({
            username,
        });
    }

}

module.exports = octokitService;