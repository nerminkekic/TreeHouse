// Quiz Program

var quiz = [
  ['What is capitacl of Bosnia and Herzegovina?', 'sarajevo'],
  ['What is the name of ocean that seperates Unites States and Europe continent?', 'atlantic'],
  ['Who was the first president of United States?k', 'george washington'],
];

var userAnswers = [];
var correctAnswers = 0;
var answer;

for (var i = 0; i < quiz.length; i++) {
  answer = prompt(quiz[i][0]);
  quiz[i][2] = answer;
  answer = answer.toLowerCase();
  if (answer === quiz[i][1]) {
    correctAnswers += 1;
    userAnswers[i] = quiz[i][0];
    userAnswers[i] +
  }

}


function printQuiz(quiz) {
  var quizHTML = "<h1> Quiz Results </h1>";
  for (var i = 0; i < quiz.length; i++) {
    quizHTML += '<p> Question ' + quiz[i][0] + ' Correct Answer ' + quiz[i][1] + ' Your Answer ' + quiz[i][2] + '</p>';
  }
  quizHTML += '<h2>You answered correctly ' + correctAnswers + ' questions.</h2>'
  document.write(quizHTML);

}


printQuiz(quiz);
















// var playList = [
//   ['I did it my way', 'Frank Sinatra'],
//   ['Respect', 'Aretha Frenklin'],
//   ['Imagine', 'John Lennon'],
//   ['Born to Run', 'Bruce Spreengstin'],
//   ['Louie Louie', 'The Kingsmen'],
//   ['Myabeline', 'Chuck Berry']
// ];

// function print(message) {
//   document.write(message);
// }

// function printSongs(songs) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < songs.length; i += 1) {
//     listHTML += '<li>' + songs[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// printSongs(playList);