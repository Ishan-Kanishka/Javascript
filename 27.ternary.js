// ternary operator = shortcut for an "if/else statement"
                    //  Takes 3 operands
//                  1. a condition with ?
//                  2. expression if True :
//                  3. expression if False 

// condition ? exprIfTrue : exprIfFalse

let adult = checkAge(15);
console.log(adult);
/*function checkAge(age){

    if(age >= 18){
        return true;
    }    
    else{
        return false;
    }    

    
}*/
//There is another way of writing this and its a lot easier.
function checkAge(age){

    return age >= 18 ? true : false;
}

//Another example

checkWinner(true);

function checkWinner(win){
    win ? console.log('YOU WIN!') : console.log('YOU LOSE')
}