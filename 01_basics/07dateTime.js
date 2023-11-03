// Date

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());

let myDateone = new Date();
console.log(myDateone.toTimeString());

console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getDate());
console.log(myDate.getDay());

console.log(typeof myDate);
// new Data(); ye ek object hai

// let myCreatdate = new Date(2023, 10, 3, 12 , 3);
var myCreatdate = new Date("2023-11-3");
var myCreatdate = new Date("2023-11-3");
var myCreatdate = new Date("03-14-2023");
console.log(myCreatdate.toDateString());
console.log(myCreatdate.toLocaleString());

let myTime = Date.now();
console.log(myTime);

console.log(myCreatdate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newdate = new Date();
console.log(newdate.getMonth() + 1);

newdate.toLocaleString("default", {
    weekday: 'long'
});
console.log(newdate);

// console.log( "2" + "2" - "2");
