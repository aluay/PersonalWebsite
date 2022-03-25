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
document.getElementById("side-nav-dark-button").addEventListener("click", darkMode);

function darkMode() {
    document.getElementById("side-nav-dark-button").classList.toggle("dark-mode-button");
    if (document.getElementById("side-nav-dark-button").innerHTML == "LIGHT") {
        document.getElementById("side-nav-dark-button").innerHTML = "DARK";
    } else {
        document.getElementById("side-nav-dark-button").innerHTML = "LIGHT";
    }

    const pre = document.querySelectorAll('.pre');
    pre.forEach(pre => {
        pre.classList.toggle("dark-mode-red-font");
    });

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.toggle("dark-mode-background");
    })
}

/*
    Section Animations
*/

ScrollReveal({
    // reset: true,
    distance: '50px',
    duration: 1500,
    delay: 100
});

//Hello section animation
ScrollReveal().reveal('.greeting', {
    delay: 200,
    origin: 'right'
});
ScrollReveal().reveal('.hello-list', {
    delay: 200,
    origin: 'bottom'
});

//About section animation
ScrollReveal().reveal('.about-h1', {
    delay: 200,
    origin: 'top'
});
ScrollReveal().reveal('.about-p', {
    delay: 200,
    origin: 'right'
});
ScrollReveal().reveal('.about-list', {
    delay: 200,
    origin: 'bottom'
});

//Work section animation
ScrollReveal().reveal('.work-h1', {
    delay: 200,
    origin: 'right'
});
ScrollReveal().reveal('.work-p', {
    delay: 200,
    origin: 'left'
});
ScrollReveal().reveal('.work-list', {
    delay: 200,
    origin: 'top'
});

//  Projects section animation
ScrollReveal().reveal('.projects-h1', {
    delay: 200,
    origin: 'bottom'
});
ScrollReveal().reveal('.projects-p', {
    delay: 200,
    origin: 'left'
});
ScrollReveal().reveal('.projects-list', {
    delay: 200,
    origin: 'top'
});


/*
    WIP rotate thingy
*/
/*
window.addEventListener("scroll", function () {
    document.getElementById("hello").style.transform = "rotate(-" + window.pageYOffset + "deg)";
});
*/