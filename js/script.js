/*
    When the window loads up, fetch the info from GitHub
    annd pass it to the insertDHData function
*/
window.onload = function gh() {
    Promise.all([
        fetch('https://api.github.com/users/aluay/repos').then(response => response.json()),
    ]).then(data => insertGHData(data));
}

/*
    Insert GitHub data into the list
*/
function insertGHData(data) {
    data[0].forEach(function (element, i) {
        document.getElementById("projects-list").innerHTML +=
            `<li>
                <span class="red-1">#${i+1}</span>&nbsp; <a href=${element.html_url} target="_blank">${element.name}</a>
            </li>`;
    });
}