// this challenge is part of the Udemy JS Course made by Jonas Schmedtmann

var playerOneH = 180;
var playerTwoH = 172;
var playerOneAge = 18;
var playerTwoAge = 14;
var playerThreeH = 172;
var playerThreeAge = 56;

var scoreOne = playerOneH + (playerOneAge * 5);
console.log("===================");
console.log("The score of the first player is " + scoreOne);

var scoreTwo = playerTwoH + (playerTwoAge * 5);
console.log("The score of the second player is " + scoreTwo);

var scoreThree = playerThreeH + (playerThreeAge * 5);
console.log("The score of the third player is " + scoreThree);
console.log("===================");


if(scoreOne == scoreTwo && scoreTwo == scoreThree){
	console.log("OMG that's a draw");
} else if(scoreOne > scoreTwo && scoreOne > scoreThree) {
	console.log("The winner is the firts player");
} else if(scoreTwo > scoreOne && scoreTwo > scoreThree) {
	console.log("The winner is the second player");
} else {
	console.log("The winner is the third player");
}
