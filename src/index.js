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
  "os",
  "planter",
  "baguette",
  "rue",
  "disgracieux",
  "penitencier",
  "parapluie"
];

var word = getRandomWord();
const triedLetters = [];
const result = getRes();
let count = 0;

function getRes() {
  const res = [];
  //for (const i of Array(word.length).keys()) {
  for (var i = 0; i < word.length; i++) {
    res.push("_");
  }
  return res;
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function isCorrectLetter() {
  let letter = document.getElementById("letter").value;
  const letterIndexes = [];

  // verify if the letter is already tried
  if (!triedLetters.includes(letter)) {
    triedLetters.push(letter);
    // verify if the word contains the letter
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        letterIndexes.push(i);
      }

      count++;
    }
  }
  document.getElementById("app").innerHTML += result;
  document.getElementById("app").innerHTML += word[0];
}

function displayHiddenWord() {
  for (const e of result) {
    document.getElementById("hidden_word").innerHTML += " " + e;
  }
}

document
  .getElementById("game_input")
  .addEventListener("submit", isCorrectLetter);

displayHiddenWord();
