const red = 27;
const green = 153;
const blue = 139;


function changeColor() {
    const header = document.getElementById("header");
    const scrollFactor = 1 + window.scrollY / 300;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    updatedColor = `rgb(${r}, ${g}, ${b})`;

    header.style.backgroundColor = updatedColor;
}

window.addEventListener('scroll', changeColor)
