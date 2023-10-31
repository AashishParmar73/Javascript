const accountId = 1445533;
let accountEmail = "john@gmail.com";
var accountPasswor = 123456;
accountCity = "Kukshi";
let accountState;

// accountId = 2; not allowed

accountEmail = "para52@gmail.com";
accountPasswor = "22554411";
accountCity = "Indore";

/*
prefer not to use var
because of issue in block scope and functional scope 
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPasswor, accountCity, accountState]);