const greeting = document.getElementById("greeting")

greeting.style.textAlign = "center"
greeting.style.marginTop = "50px"

const username = window.prompt("What's your name?", "Jane")
greeting.innerHTML = "Welcome to my website, " + username + "!"


/* OPTIONAL SCROLL ANIMATION */
/*
const red = 27;
const green = 153;
const blue = 139;
const header = document.getElementById("header");
console.log(header.innerText)

function changeColor() {
    const header = document.getElementById("header");
    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;
    const updatedColor = `rgb(${r}, ${g}, ${b})`;
    header.style.backgroundColor = updatedColor;
}
window.addEventListener('scroll', changeColor)
*/
