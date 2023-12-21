/* Based on this StackOverflow answer: https://stackoverflow.com/questions/52637835/dynamically-change-background-color-on-scroll */
const red = 27;
const green = 153;
const blue = 139;

const section1 = document.getElementById("header")

/* To make the background fade FASTER, make the dimming constant SMALLER */
const dimmingConstant = 500

window.addEventListener('scroll', () => {
    let y = 1 + window.scrollY / dimmingConstant;
    const r = red / y;
    const g = green / y;
    const b = blue / y;
    section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})