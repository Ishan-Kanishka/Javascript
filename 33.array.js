// array = think of it as a variable 
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut"; replace an index

console.log(fruits[0]); 

fruits.push("lemon"); //add an element to the end
fruits.pop();         //removes last element  
fruits.unshift("mango"); //add element to beginning 
fruits.shift();      //removes element from beginning 

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(fruits);
console.log(index);


