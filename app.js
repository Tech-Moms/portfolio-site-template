function setActiveLink() {
    var links = document.getElementsByClassName("nav-link");
    console.log(links.length)
    for (var i = 0; i < links.length; i++) {
        console.log(links[i])
        if (links[i].innerHTML === 'Home') {
            links[i].style = "text-decoration: underline";
        }
    }
}

setActiveLink();