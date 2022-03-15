function goLeft() {
    document.getElementById("left-div").classList.remove("hide");
    document.getElementById("left-div").classList.add("show");
    document.getElementById("intro").classList.remove("show");
    document.getElementById("intro").classList.add("hide");
}

function goRight() {
    document.getElementById("right-div").classList.remove("hide");
    document.getElementById("right-div").classList.add("show");
    document.getElementById("intro").classList.remove("show");
    document.getElementById("intro").classList.add("hide");
}

function goLeftToIntro() {
    document.getElementById("right-div").classList.remove("show");
    document.getElementById("right-div").classList.add("hide");
    document.getElementById("intro").classList.remove("hide");
    document.getElementById("intro").classList.add("show");
}

function goRightToIntro() {
    document.getElementById("left-div").classList.remove("show");
    document.getElementById("left-div").classList.add("hide");
    document.getElementById("intro").classList.remove("hide");
    document.getElementById("intro").classList.add("show");
}

window.onload = function gh() {
    Promise.all([
        fetch('https://api.github.com/users/aluay').then(response => response.json()),
        fetch('https://api.github.com/users/aluay/repos').then(response => response.json()),
    ]).then(data => insertGHData(data));
}

function insertGHData(data) {
    document.getElementById("description").innerHTML +=
        `<p>I currently work at ${data[0].company}, Inc. as a <strong  class="red-1">Level 2 IT Support Agent</strong></p>
        </p><br></b><p class="my-projects">Some projects I coded</p>`;

    data[1].forEach(element => {
        document.getElementById("gh").innerHTML +=
            `<a href=${element.html_url} target="_blank"><div class="project"><p class="project-name"><span  class="red-1">Name</span>${element.name}</p><p class="project-description"><span  class="red-1">Description</span>${element.description}</p><p class="project-technologies-used"><span  class="red-1">Technologies used</span>${element.topics}</p></div></a>`;
    });
}