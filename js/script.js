document.getElementById("dark-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.getElementById("dark-toggle").innerHTML == "Dark") {
        document.getElementById("dark-toggle").innerHTML = "Light";
        document.getElementById("dark-toggle").style.backgroundColor = "var(--light-gray)";
        document.getElementById("dark-toggle").style.color = "var(--gray)";
    } else {
        document.getElementById("dark-toggle").innerHTML = "Dark";
        document.getElementById("dark-toggle").style.backgroundColor = "var(--gray)";
        document.getElementById("dark-toggle").style.color = "var(--light-gray)";
    }
})