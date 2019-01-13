// Global variables
// ================
var numWins = 0;
var numGuesses = 10;
var userGuess = "";
var lettersGuessed = [];
var generatedMovie = "";

// Globa variables that are targeting DOM element spans.
// =====================================================
var guessedArray = document.getElementById("incorrectGuesses");
var wins = document.getElementById("wins");
var guessesRemaining = document.getElementById("guessesRemaining")


// Game Object
// ===========

var game = {
  numWins: 0,
  numGuesses: 10,
  userGuess: "",
  lettersGuessed: [],
  randomlyGeneratedMovie: "",
  generatedMovieSplit: [],
  generatedMovie: "",
  titleLetters: document.getElementById("movieTitle"),
  guessedArray: document.getElementById("incorrectGuesses"),
  wins: document.getElementById("wins"),
  guessesRemaining: document.getElementById("guessesRemaining"),
  movies: [
    ["interstellar", "https://www.youtube.com/embed/2LqzF5WauAw"],
    ["themartian", "https://www.youtube.com/embed/ej3ioOneTy8"],
    ["moon", "https://www.youtube.com/embed/WWoDBcSW4_c"],
    ["2001aspaceodyssey", "https://www.youtube.com/embed/oR_e9y-bka0"],
    ["starwars", "https://www.youtube.com/embed/vZ734NWnAHA"],
    ["spaceballs", "https://www.youtube.com/embed/kGIM_yNzeUo"],
    ["thehitchhikersguidetothegalaxy", "https://www.youtube.com/embed/eLdiWe_HJv4"],
    ["arrival", "https://www.youtube.com/embed/tFMo3UJ4B4g?start=3"]
  ]
}
// Psuedo-code
// ===========
// press any key to start game
// Press a key to start the game.
// ==============================
document.onkeyup = function(event) {
  // console.log(game.movies);
  randomMovie();
  movieSplit(generatedMovie);
  generateDashesDOM();
  // testFunction();
}
//===============================
// game randomly chooses one of the movies for the player to guess
function randomMovie() {
  generatedMovie = game.movies[Math.floor(Math.random()*game.movies.length)];
}
//===============================
//When movie gets chosen, split characters into indices assigned to "generatedMovieSplit".
function movieSplit(movie) {
  generatedMovieSplit = movie[0].split("");
  console.log(generatedMovieSplit);
}
//==============================
// when movie is chosen, display to DOM in form of dashes, in which each character of movie title will be separated and represented individually. Use ".innerHTML".
function generateDashesDOM() {
  var grabSpan = game.titleLetters;
  // for (i = 0; i < generatedMovieSplit.length; i++) {
  //   // Target span element and insert dashes using innerhtml and createelement for new spans
  //   var createSpan = document.createElement("span");
  //   // createSpan.setAttribute("id",);
  //   createSpan.innerHTML = generatedMovieSplit[i];
  //   grabSpan.appendChild(createSpan);
  //   createSpan.setAttribute("id", ;
  //   //Below line of code was to be somewhat used to get index place in array and use as an id for the span.
  //   // console.log(generatedMovieSplit.indexOf(generatedMovieSplit[i]) + "-" + generatedMovieSplit[i]);
  // }
  generatedMovieSplit.forEach(function (value, i) {
    // console.log('%d: %s', i, value);
    var createSpan = document.createElement("span");
    createSpan.setAttribute("id", i);
    createSpan.innerHTML = " - ";
    grabSpan.appendChild(createSpan);
  })

  console.log(grabSpan);
}

// if player chooses a correct letter, display correct letter
// if player chooses incorrect letter, display letter in letters guessed array in the DOM and also decrement the guesses remaining DOM element
// if player guesses complete title with positive amount of guesses remaining, increment wins column, reset game, have movie trailer play off of youtube

// example below
// <iframe width="560" height="315" src=" + movies[1][1] + " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

// if player cannot guess movie with all the guesses available, display message they lost and start new game

//I need to target the one specific span in the DOM. I then need to loop throught the movie title array and create new spans that correspond with each index from the for-loop. Each new span will insert a placeholder "-" to represent the unguessed letter.