const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const lin = document.querySelector(".lin");


btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  let linColor = "#";
  for (let i = 0; i < 6; i++) {
    linColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  lin.textContent = linColor;
  document.body.style.backgroundImage = `linear-gradient( to right, ${hexColor},${linColor}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}