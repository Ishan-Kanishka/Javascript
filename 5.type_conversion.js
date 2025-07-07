//Type conversion = change the datatype of a value to another
//                  (strings,numbers,booleans)

let age = window.prompt("How old are you?");

console.log(typeof age);

age = Number(age);

age += 1;

console.log(age);

console.log("Happy Birthday! You are", age, "years old");



let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza"); //if the value of a boolean is nothing the out put is gonna be false ez dub Brainy

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
