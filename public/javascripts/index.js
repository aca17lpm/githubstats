
function init() {

}

function addRepo(repo) {

    let repoCard = document.createElement('div')
    repoCard.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let heading = document.createElement('h4');
    heading.innerText = repo.name;

    let url = document.createElement('p');
    url.innerText = repo.html_url;

/*    let type = document.createElement('p');
    type.innerText = item['@type'].reduce((prev, curr) => {
        return `${prev}, ${curr}`;
    })*/

    let description = document.createElement('p');
    description.innerText = repo.description;

    cardBody.appendChild(heading);
    cardBody.appendChild(url);
    //cardBody.appendChild(type);
    cardBody.appendChild(description);

    repoCard.appendChild(cardBody);

    document.getElementById('repo_div').appendChild(repoCard);

}

/**
 * function to recieve username, send axios
 */
function submitUsername() {

    let input = $(username_input).val();
    console.log(input);

    axios.post('/repos', {
        username: input
    }).then ((res) => {

        console.log('Found user');

        let repos = res.data;

        for (let repo in repos) {
            console.log(repo);
            addRepo(repos[repo]);
        }

        // For each repo in the response, fill out and add a card representing it on the main site

    }).catch(function (error) {
        console.log(error)
    });

}