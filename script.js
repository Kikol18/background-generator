var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function colorChange() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColor() {
    const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    color1.value = randomColor1;
    color2.value = randomColor2;

    colorChange();
}

colorChange();

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
random.addEventListener("click", randomColor);

