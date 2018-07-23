var getNoun = prompt("Can you give me a noun?");
var getVerbs = prompt("Can you give me a verb?");
var getAdjective = prompt("Can you give me an adjective?");

var story = "You are a " + getNoun + "and you like to ";
story += getAdjective;


document.write(story);