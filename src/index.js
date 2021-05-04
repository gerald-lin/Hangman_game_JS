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

let word;
let triedLetters;
let result;
let count;
let difficulty = 8;

setGame();

function getRes(lst) {
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
  document.getElementById("submit").disabled = true;
}

function setGame() {
  document.getElementById("submit").disabled = false;
  document.getElementById("game_input").addEventListener("submit", tryLetter);
  word = getRandomWord();
  count = 0;
  result = getRes();
  triedLetters = [];
  refresh();
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
  refresh();
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

function refresh() {
  displayHiddenWord();
  displayCount();
}

document.getElementById("game_input").addEventListener("reset", setGame);