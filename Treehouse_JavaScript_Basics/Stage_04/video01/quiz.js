// var answer = prompt("What programming language is the name of a gem?");
// if (answer.toUpperCase() === 'RUBY') {
//     document.write("<p>That is right!</p>")
// } else {
//     document.write("This incorect!")
// }

// 

//Ask five questions
// var correctAnswerCount = 0;

// var answer1 = prompt("Chicago belongs to which State?");
// if (answer1.toUpperCase() === "ILLINOIS") {
//     correctAnswerCount += 1;
// }

// var answer2 = prompt("What is capital of France?");
// if (answer2.toUpperCase() === "PARIS") {
//     correctAnswerCount += 1;
// }

// var answer3 = prompt("What is the name of baskeball team that play for Los Angeles?");
// if (answer3.toUpperCase() === "LAKERS") {
//     correctAnswerCount += 1;
// }

// var answer4 = prompt("Who is president of Canada?");
// if (answer4.toUpperCase() === "JUSTIN TRUDEAU") {
//     correctAnswerCount += 1;
// }

// var answer5 = prompt("What are the three leters of a car brand from Germany?");
// if (answer5.toUpperCase() === "BMW") {
//     correctAnswerCount += 1;
// }

// if (correctAnswerCount === 5) {
//     document.write("<h1>You have answered " + correctAnswerCount + " answers. You have earned Gold Medal!</h1>");
// } else if (correctAnswerCount > 2 && correctAnswerCount < 5) {
//     document.write("<h1>You have answered " + correctAnswerCount + " answers. You have earned Silver Medal!</h1>");
// } else if (correctAnswerCount > 0 && correctAnswerCount < 3) {
//     document.write("<h1>You have answered " + correctAnswerCount + " answers. You have earned Bronze Medal!</h1>");
// } else {
//     document.write("<h1>You have answered " + correctAnswerCount + " answers. There is no Medal for  you! Sorry better luck next time.</h1>");
// }

// function getAlertRandom() {
//     var randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
// }

// function isEmailEmpty() {
//     var field = document.getElementById("email");
//     if (field.value === '') {
//         return true;
//     } else {
//         return false;
//     }
// }
// var fieldTest = isEmailEmpty();
// if (fieldTest === true) {
//     alert("Please provide valid email!");
// // }

// function getRandomNumber(upper) {
//     var randomNumber = Math.floor(Math.random() * upper) + 1;
//     return randomNumber;
// }

// // console.log(getRandomNumber(55));

// function getArea(width, length, unit) {
//     var area = width * length;
//     return area + " " + unit;
// }

// console.log(getArea(3, 6, "m"));






function getRandomNumber(max_num, min_num) {
    if (isNaN(max_num) || isNaN(min_num)) {
        throw new Error("Argument is not a number! Please enter number as argument!");
    }
    var randomNum = Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
    return randomNum;
}

alert(getRandomNumber(5, 'hi'));