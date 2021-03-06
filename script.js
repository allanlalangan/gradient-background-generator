//Selectors
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");


function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomHex() {
    var color = "#";
    var hex = "0123456789ABCDEF";

    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor1() {
    color1.value = randomHex();
    setGradient();
}

function randomColor2() {
    color2.value = randomHex();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random1.addEventListener('click', randomColor1);
random2.addEventListener('click', randomColor2);

css.addEventListener('click', copyStyle);




