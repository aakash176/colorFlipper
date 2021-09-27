const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "white", "yellow", "pink", "brown"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }