// do while loop = do something
                // then check the condition 
                // repeat if condition is true
/*What I like to do is to not assign my userName right away I'll declare this variable
but not yet assigning anything now when I run this program here's the problem
we dont get that window promt to type in our name we skipped the while loop and continue on with
the rest of the program
what if I like to run this code atleast once then prompt again if the userName is equal to an
empty string*/

let userName;
do{
    userName = window.prompt("Enter your name");
}
while(userName == "")    


console.log("Hello", userName);

//You do something first and then check the condition
// With a standard while loop you check the condition and then do something if that condition 
// is true
// With a standard while loop you may skip some codes entirely if the condition is false from
// the beginning 