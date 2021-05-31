var readlineSync = require("readline-sync");

var score = 0;


var questions = [{
  question: "Who is shown alive in the post credit seen ",
  answer: "Chote Tyagi"
}, {
  question: "What is the famaous dialogue of Bharose vale Chacha? ",
  answer: "Mamla dar ka nhi izzat ka h"
},
{
  question: "Who said this to whom?\nKuch log bahubali peda hote h\nInko hm bnayenge ",
  answer: "Kaleen Bhaiya to Bauji "
},
{
  question:"Who said this? Tmhare papa bhi gaali diye the tum bhi diye ho Vo bhi pele gye the Tum bhi pele jaoge",
  answer:"Guddu Bhaiya"
},
{
  question: "What Guddu ordered at Munna Bhaiya's house?",
  answer:"Eggs"
}]



function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " I am sure that you have watched Mirzapur.\nSo this is the time to check your memory.\nLet the party begin.");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}


welcome();
game();
showScores();
