//Array

const myArr = [1, 2, 3, 4, 5];
const myCar = ["Tata", "Audi"];

const myArr1 = new Array(1, 2, 3, 4);

console.log(myArr);
console.log(myCar);
console.log(myArr1);

// Array Methods

// push  array add karth value ko

myArr.push(6, 7, 8);
// pop last value ko remove karta hai
myArr.pop();
console.log(myArr);

// unshift first value ko add karta hai
myArr.unshift(0);
// shift first value ko remove karta hai
myArr.shift();
console.log(myArr);

// includes  question puchta hai true ye false jo value hai ki nahi

// myArr.includes(8)
console.log(myArr.includes(8));
// indexof value puchta vo value he ke nahi
console.log(myArr.indexOf(6));

// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).
// join methods array ke bich ki value add ho jata hai
const arr = [1, 2, 3, 4, 5, 6];
const newpara = arr.join(" 0");
console.log(newpara);

// Slice, splice
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string

var num = [1, 2, 3, 4, 5, 6];
console.log("A", num);

const myn1 = num.slice(1, 3);
console.log(myn1);
console.log("B", num);

const myn2 = num.splice(1, 3);
console.log("C", num);
console.log(myn2);
