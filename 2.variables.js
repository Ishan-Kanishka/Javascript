//A variable is a container for storing data (Its a representation of some value)
//A variable behaves as if it was the value that it contains


//There are two steps to create a variable 

//Two steps:
// 1.Declaration (var,let,const) Brocode will discuss const in the future videos Don't worry Brainy
//We use one or three keywords to declare a variable 
// 2/Assignment (= assignment operator)



//ADDING NUMBERS AS VARIABLES

let age; // you can also do like this (let age = 21;)

age= 21; //numbers

age= age + 1;

console.log(age);

//ADDING LETTERS AS VARIABLES

let firstname = "Brainy";//strings

console.log(firstname);

//ADDING BOOLEANS AS VARIABLES

let firststudent = false;//booleans

console.log(firststudent);

/* As a beginner, you really have to


pay attention to the data types */

console.log("Hello",firstname,"!");
console.log("You are",age,"years old.");
console.log("Endrolled:", firststudent);

document.getElementById("p1").innerHTML = "Hello " + firstname;  
//you have to be careful with spaces
// when using string concatenation
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + firststudent;

