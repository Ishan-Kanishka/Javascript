//method chaining = calling one method after another in one continuos line of code

/*
let userName = "brainy";

let letter = userName.charAt(0);
letter = letter.toUpperCase();

console.log(letter);
*/

let userName = "brainy";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);
