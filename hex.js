const button = document.querySelector(".button");
const color = document.querySelector(".color");

const colorLetters = "0123456789ABCDEF";
function ColorRandomizer() {
    let myColor = "#";
    for (var i = 0; i < 6; i++) {
        myColor += colorLetters[Math.floor(Math.random() * 16)];
    }
    return myColor;
}

button.addEventListener("click", function () {
    let setColor = ColorRandomizer();
    document.body.style.backgroundColor = setColor;
    color.innerHTML = setColor;
})
