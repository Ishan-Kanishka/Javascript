/*Template literals = demilited with (`)
                     instead of double or single quotes
                     allows embedded variables and expressions*/
  
// Maybe, we are working on a page for online store      
let userName = "Brainy";
let items    =  3;
let total = 75;
   


console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

let text = 
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;


