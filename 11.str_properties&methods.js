//Useful string properties and methods

let userName = " Brainy gamemind ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("y"));
console.log(userName.lastIndexOf("a"));

userName = userName.trim(); //removes the whitespace between the end and the beginning of a string.
userName = userName.toUpperCase();
userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "$");  //this is used to replace something with 
console.log(userName);                           //something eles

console.log(phoneNumber);



