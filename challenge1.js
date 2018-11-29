/*******************************
* CODING CHALLENGE 1
*
*

Mark and John are trying to compare their BMI, which is calculated using the
formula: BMI = mass / height^2 = mass / (height * height). Mass in kg. and
height in meter.

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing info about whether Mark has a higher
BMI than John.
4. Print a string to the console containing the var from step 3.


*
*
*/

var markHeight = 1.7;
var markMass = 79;
var johnHeight = 1.4;
var johnMass = 65;

var markIbm = markMass / (markHeight * markHeight);
var johnIbm = johnMass / (johnHeight * johnHeight);

var isMarkIbmHigher;

if (markIbm > johnIbm) {
  isMarkIbmHigher = true;
} else {
  isMarkIbmHigher = false;
}

console.log("Mark's IBM is: " + markIbm + " " + "and John's IBM is " +
  johnIbm + " so, is Mark's IBM higher than John's? I tell you that is " +
  isMarkIbmHigher);


// this challenge is part of the Jonas Schmedtmann's Complete Javascript Course
// check it out at https://www.udemy.com/the-complete-javascript-course/
