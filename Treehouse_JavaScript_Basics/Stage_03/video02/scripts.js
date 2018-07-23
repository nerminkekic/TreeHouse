//Random Number Generator

var userNum = prompt("Think of any number between 1 and 10 and enter it!");
userNum = parseInt(userNum);

var randomNum = Math.floor(Math.random() * userNum) + 1;

document.write("<h1>Random number is: " + randomNum + "</h1>");