// while loop = repeat some code
//              while some condition is true
//              potentially infinite  AS soon as the while condition is false the loop is going
//              to stop so false can stop while loop who gon stop me without false 


let userName = "";

while(userName == "" || userName == null){

      userName = window.prompt("Enter your name")


}

console.log("Hello", userName);

// When u create a while loop, you should write some sort of way to escape the 
// while loop from within it otherwise you only counter what's called infinite loop 

while(1 == 1){
    console.log("HELP! I'm stuck in an infinite loop")
}
