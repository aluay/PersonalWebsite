/*
    When the window loads up, fetch the info from GitHub
    and pass it to the insertDHData function
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
                <span>#${i+1}</span>&nbsp; <a href=${element.html_url} target="_blank">${element.name}</a>
            </li>`;
    });
}

/* 
    Toggle dark mode on and off
*/
//  Event listener instead of inline onclick
document.getElementById("dark-button").addEventListener("click", darkMode);

function darkMode() {
    document.getElementById("dark-button").classList.toggle("dark-mode-button");
    if (document.getElementById("dark-button").innerHTML == "LIGHT") {
        document.getElementById("dark-button").innerHTML = "DARK";
    } else {
        document.getElementById("dark-button").innerHTML = "LIGHT";
    }

    const pre = document.querySelectorAll('.pre');
    pre.forEach(pre => {
        pre.classList.toggle("dark-mode-red-font");
    });

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.toggle("dark-mode-background");
        section.classList.toggle("dark-mode-border");
    })
}