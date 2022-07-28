
const { Octokit, App } = require("octokit");
const octokit = new Octokit({auth: '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'})

class octokitService {

    static async test(){
        const { data: { login }, } = await octokit.rest.users.getAuthenticated();
        console.log("Hello, %s", login);
    }

}

module.exports = octokitService;