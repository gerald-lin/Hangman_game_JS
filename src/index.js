import "./styles.css";

const words = [
  "elephant",
  "peche",
  "porte",
  "chose",
  "aime",
  "terminer",
  "soin",
  "embrasser",
  "affaire",
  "rester",
  "general",
  "preuve",
  "os"
];
const word = getRandomWord();
const letters = [];
let count = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function isCorrectLetter() {
  let tmp = document.getElementById("letter").value;
  if (!tmp in letters) {
    letters.push(tmp);
  }
}
