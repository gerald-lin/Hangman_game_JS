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

function tryLetter() {
  let current = document.getElementById("letter").value;
  const letterIndexes = [];

  // verify if the letter is already tried
  if (!triedLetters.includes(current)) {
    triedLetters.push(current);

    // verify if the word contains the letter
    for (var i = 0; i < word.length; i++) {
      if (word[i] === current) {
        letterIndexes.push(i);
      }
    }

    // update result to display correct letters
    for (var i = 0; i < letterIndexes.length; i++) {
      result[letterIndexes[i]] = current;
    }
  }
  displayHiddenWord();
}

function displayHiddenWord() {
  var res = "";
  for (const e of result) {
    res += " " + e;
  }
  document.getElementById("hidden_word").innerHTML = res;
}

document.getElementById("game_input").addEventListener("submit", tryLetter);

displayHiddenWord();
