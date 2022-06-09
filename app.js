const button = document.querySelector("#button");
const body = document.getElementById("body");
const hexTitle = document.querySelector("#hex");

const hexNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

button.onclick = getColor;

function getColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    color += hexNumbers[random];
  }
  body.style.backgroundColor = color;
  hexTitle.innerHTML = color;
}
