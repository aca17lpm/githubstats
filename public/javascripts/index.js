/** index.js
 * Javascript for main page
 * */

/**
 * Initialise event handlers for submission form
 */
function init() {

    $('#username_form').on('submit', () => {
        return false;
    });

    $('#username_form').keypress((e) => {
        // Enter key corresponds to number 13
        console.log('Enter pressed')
        if (e.which === 13) {
            submitUsername();
        }
    })
}

/**
 * Function to receive username, send axios POST to router
 */
function submitUsername() {

    let input = $('#username_input').val();

    if (input == '') {
        window.alert('Please enter a username');
    } else {
        $('#repo_div').innerHTML = '';

        // Post username to router
        axios.post('/repos', {
            username: input
        }).then ((res) => {
            let repos = res.data;

            // For each repo, add a card filled out with repo info
            for (let repo in repos) {
                console.log(repo);
                addRepo(repos[repo]);
            }

        }).catch(function (error) {
            console.log(error)
        });
    }
}

/**
 * Add a repo card to the div, building up HTML elements in tree
 */
function addRepo(repo) {

    let repoCard = document.createElement('div')
    repoCard.classList.add('card', 'mb-4', 'box-shadow');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    let heading = document.createElement('h4');
    heading.innerText = repo.name;

    cardHeader.appendChild(heading);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let url = document.createElement('a');
    url.href = repo.html_url;
    url.innerText = repo.html_url;

    let description = document.createElement('p');
    description.innerText = repo.description;

    cardBody.appendChild(cardHeader);
    cardBody.appendChild(url);
    cardBody.appendChild(description);

    repoCard.appendChild(cardBody);

    document.getElementById('repo_div').appendChild(repoCard);

}