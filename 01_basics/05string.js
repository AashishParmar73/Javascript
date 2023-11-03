const name = "john";
const ropcount = 50;

// console.log(name + ropcount + " value");

console.log(`Hello my name is ${name} and ropo count is ${ropcount} `);

const gameName = new String("JohnCena-TheRock");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
// ye object hai
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "      TheRock";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20john";

console.log(url.replace("%20", "-"));

console.log(url.includes("john"));

console.log(gameName.slice('/'))
