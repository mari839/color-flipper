const myColorsArray = ["purple", "rgba(46, 193, 245)", "##94ffaf", "red"];
const button = document.querySelector(".button");
const color = document.querySelector(".color");
button.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * myColorsArray.length);
    document.body.style.backgroundColor = myColorsArray[randomNum];
    color.innerHTML = myColorsArray[randomNum];
})