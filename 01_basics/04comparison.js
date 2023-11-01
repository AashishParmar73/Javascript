/* JavaScript Operators
Operators are used to assign values, compare values, perform arithmetic operations, and more.

There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Conditional Operators
Type Operators */

/* 01. Comparison Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values.

Given that x = 5, the table below explains the comparison operators: */

// ==	equal to	x == 8	false	
// ==	equal to	x == 5	true	
// ===	equal value and type	x === "5"	false	
// ===	equal value and type	x === 5	true	
// !=	not equal	x != 8	true	
// !==	not equal value or type	x !== "5"	true	
// !==	not equal value or type	x !== 5	false	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater or equal to	x >= 8	false	
// <=	less or equal to	x <= 8	true

var x = 5;
console.log(x === "5");

var x = 5;
console.log(x != 5);

var x = 5;
console.log(x !== "5");

var x = 5;
console.log(x > 4);

var x = 5;
console.log(x < 6);

var x = 5;
console.log(x >= 5);

var x = 5;
console.log(x <= 5);

// console.log( "2" > 1);
// console.log("02"> 1 );

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);




