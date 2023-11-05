// singleton
// object.create

// Object literals

const mySym = Symbol("key1");
console.log(mySym);

const User = {
  [mySym]: "myKey1",
  name: "John",
  age: 25,
  location: "Indore",
  email: "johncena577@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(User[mySym]);

// value change 
User.email= "The@gmail.com";
// freeze ka matlabe value change nahi hogi 
// Object.freeze(User);
User.email = "johnchatgit@gmail.com";
console.log(User);

User.greeting = function(){
    console.group("Hello JS User");
}

User.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

console.log(User.greeting())
console.log(User.greetingTwo())

// ************************************************////////////////////////

// ye ek singleton hai / {} object hai
// const tinder = new Object();

// ye ek singleton object nahi hai / {} object hai
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sunny";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullName: {
      firstname: "John",
      lastname: "Cena",
    },
  },
};

// console.log(regularUser.fullName.userfullName);

const obj1 = {
  1: "a",
  2: "2",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = { obj1, obj2 };
// assign() object return karta hai
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3 === obj1);

// Array of object
const User = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "h@gmail.com",
  },
  {
    id: 3,
    email: "h@gmail.com",
  },
  {
    id: 4,
    email: "h@gmail.com",
  },
];
console.log(Object.values(User));
// console.log(Object.entries(User))

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "John",
}

// const {courseInstructor} = course;
const {courseInstructor: objectpara, price} = course
console.log(objectpara,price) 


// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

/* {
    "name": "The Rock",
    "coursename" : "JS in Hindi",
} */