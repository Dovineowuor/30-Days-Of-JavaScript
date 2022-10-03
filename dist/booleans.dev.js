"use strict";

console.log(1 > 2);
/*false*/

console.log(1 == 2);
/*false*/

var score = 100;
console.log(score == 101);
/*false*/

console.log(2 == 2);
/*true*/

console.log(100 == "100");
/*true*/

console.log(100 === "100");
/*false*/

console.log(1 != 2);
/*true*/

console.log(1 !== 1);
/*false*/

console.log(1 !== "1");
/*true*/

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
/*true*/

console.log(10 > 9 && 10 < 17);
/*true*/

console.log(true && true);
/*true*/

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
/* true*/

console.log(22 % 5); // true

"inter" + "net"; // "internet"

"note" + "book"; // "notebook" true

365 + " days"; // "365 days"

12 + " months"; // "12 months"

var score = 8;
console.log(score > 0 && score < 10); //true
// Task 1 soln

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10); //  Task 2 soln

var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0); // Task 3

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2); // Task 4

console.log(5 + 10); // 15
// Task 5

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d); // "Now in 3D!"
// Task 6