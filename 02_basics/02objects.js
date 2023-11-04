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
