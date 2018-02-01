// For this challenge we have to give an array of some people's
// years of birth, then know their ages and tell if they are old enough to drink

var ages = [1992, 1993, 1956, 2001];
var newAges = [];

for (var i = 0; i < ages.length ; i++) {
	newAges[i] = 2017 - ages[i];
};

// See if they are over 18 years

for (var i = 0; i < newAges.length; i++) {
	if (newAges[i] >= 18) {
		console.log("Person is " + newAges[i] + " years old and is old enough to drink");
	} else {
		console.log("Person is " + newAges[i] + " years old and isn't old enough to drink");
	}
}

// this challenge is part of the Jonas Schmedtmann's Complete Javascript Course
// check it out at https://www.udemy.com/the-complete-javascript-course/
