/* In this code, I'm going to calculate the hypotenuse of a right-angled triangle 
and the formula to solve that is C equals the sqaure root of a squared plus b squared 
We'll create two variations of this program
first we'll accept some user input
later and we'll do something with html text boxes*/

let a;
let b;
let c;
/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

//c = Math.pow(a, 2) + Math.pow(b, 2);
 
//c = Math.sqrt(c);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
*/

//console.log("Side C =", c);

document.getElementById("submitButton").onclick = function()
{
    
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    
    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));   
    
    document.getElementById("clabel").innerHTML = "Side C: " + c;
    
}


