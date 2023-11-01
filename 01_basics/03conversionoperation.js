let score = "abc33";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33"=> 33
// "abc33"=> NaN
// true=> 1: false=> 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true: 0=> false
// "" => false
// "John"=> true

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********************** Operations *******************

let value = 3;
let negValue = -value;
console.log(negValue);

// JavaScript Operators
// Operators are used to assign values, compare values, perform arithmetic operations, and more.

// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

// 01 . JavaScript Arithmetic Operators
// Arithmetic operators are used to perform arithmetic between variables and/or values.
// Given that y = 5, the table below explains the arithmetic operators:

var y = 5;
var x = y + 2;
console.log(x);

var y = 5;
var x = y - 2;
console.log(x);

var y = 5;
var x = y * 2;
console.log(x);

var y = 5;
var x = y / 2;
console.log(x);

var y = 5;
var x = y ** 2;
console.log(x);

var y = 5;
var x = y % 2;
console.log(x);

/* var y = 5;
var x = y ++ 2;
console.log(x);

var y = 5;
var x = y -- 2;
console.log(x);
 */

let str1 = "john";
let str2 = "hello";
let str3 = str1 + str2;
console.log(str3)
// string add 

console.log("1" + 2);
console.log(2 + "1");
console.log("1" + 2 + 2);
// first value string and string he consader karta hai 
console.log(2 + 2 + "1")
// first value add to add to string he karta hai 

console.log((3 + 2) * 5 % 2);
console.log(+true);
console.log(+"");


let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

console.log(2 + true)
// 2 +  true=> 1  = 3 output






