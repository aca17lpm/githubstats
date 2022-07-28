
const { Octokit, App } = require("octokit");

const githubAuth = process.env.GITHUB_KEY;
console.log(githubAuth);
const octokit = new Octokit({auth: githubAuth});

class octokitService {

    static async test(){
        const { data: { login }, } = await octokit.rest.users.getAuthenticated();
        console.log("Hello, %s", login);
    }

}

module.exports = octokitService;