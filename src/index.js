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
let difficulty = 8;

displayHiddenWord();
displayCount();

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

function gameLost() {
  document.getElementById("count_text").innerHTML = "Lost !";
  document
    .getElementById("game_input")
    .removeEventListener("submit", tryLetter);
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

    if (letterIndexes.length === 0) {
      count++;
      // verify if game is lost
      if (count === difficulty) {
        gameLost();
        return;
      }
    }

    // update result to display correct letters
    for (i = 0; i < letterIndexes.length; i++) {
      result[letterIndexes[i]] = current;
    }
  }
  displayHiddenWord();
  displayCount();
}

function displayHiddenWord() {
  var res = "";
  for (const e of result) {
    res += " " + e;
  }
  document.getElementById("hidden_word").innerHTML = res;
  document.getElementById("tried_letters").innerHTML = triedLetters;
}

function displayCount() {
  document.getElementById("count_text").innerHTML = count + "/" + difficulty;
}

document.getElementById("game_input").addEventListener("submit", tryLetter);
