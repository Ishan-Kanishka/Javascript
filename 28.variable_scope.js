// variable scope = where a variable is accessible
// let = variables are limited to block scope {}
// var = variables are limited to a function() {}
//global variable = is declared outside any function
//(if global, var will change browser's window properties)


for(var i = 1; i <= 3; i+=1){  // VAR AND LET 
    //console.log(i) you can only use LET keyword if u only print inside of the curly braces
    
}

console.log(i); // if u wanna print outside of the curly braces u gotta use the var keyword