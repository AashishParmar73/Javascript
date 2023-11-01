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