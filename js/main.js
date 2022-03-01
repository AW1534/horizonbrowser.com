// get the data from https://api.github.com and log it to the console

function getContributors(repo, cb, async = true) {
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/repos/${repo}/pulls?state=all`;
    let data;

    xhr.open("GET", url, async);

    xhr.onload = function() {
        data = JSON.parse(this.response);
        cb(data);
    }

    xhr.send();
}

getContributors("AW1534/Horizon", (data) => {
    console.log(data);
    let contributors = [];

    for (let i = 0; i < data.length; i++) {
       // add data[i].user to the array if it is not already in the array
       if (contributors.filter(contributor => contributor.login === data[i].user.login).length === 0) {
           contributors.push(data[i].user);
       }
    }

    const contributorsList = document.getElementById("contributor-boxes");

    let users = "";

    for (let i = 0; i < contributors.length && i <= 6; i++) {
        users += `
        <div class="contributor-box" id="box-0" onclick="window.location.href = '${contributors[i].html_url}' ">
            <img src=${contributors[i].avatar_url} />
            <div class="text-container">
                <p>${contributors[i].login}</p>
                <p>Created a PR</p>
            </div>
        </div>
        `;
    }

    contributorsList.innerHTML = users + contributorsList.innerHTML;

    console.log(contributors);
});