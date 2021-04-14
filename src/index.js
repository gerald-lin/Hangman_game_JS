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
const triedLetters = [];
let count = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function isCorrectLetter() {
  let letter = document.getElementById("letter").value;

  // verify if the letter is already tried
  if (!triedLetters.includes(letter)) {
    triedLetters.push(letter);
    // verify if the word contains the letter
    if (word.indexOf(letter) > -1) {
      count++;
    }
  }
  document.getElementById("app").innerHTML += word;
  document.getElementById("app").innerHTML += triedLetters;
}

function displayHiddenWord() {
  for (const i of Array(word.length).keys()) {
    document.getElementById("hidden_word").innerHTML += " _";
  }
}

document.getElementById("validate_button").onclick = isCorrectLetter;
displayHiddenWord();
