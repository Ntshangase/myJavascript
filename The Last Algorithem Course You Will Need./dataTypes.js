
// node --experimental-modules dataTypes.js


/**Javascript is Dynamic data type, meaning it will change a Number to a string instead 
 * of throwing an error.
 */

//dynamic data type.
let foo = 300;
foo = "was once a number";
//weekly typed.
let user = "simphiwe";
let age = 300;
const beString = user + age;
const beNumber = age + user;


// functions to run.
console.log("Javascript is dynamically typed: ",foo);
console.log("Javascript is weekly typed: ",beNumber);