//switch = statement that examines a value
//         for a match against many case clauses.
//         It's more efficient than many "else if" statements 

//It's not normally a good practice to use a whole bunch of "else if" statements
//so it maybe better to use the method called switch

/*
let grade = "F";

if(grade == "A"){
    console.log("You did great!");
}
else if(grade == "B"){
    console.log("You did good!");
}
else if(grade == "C"){
    console.log("You did okay!");
}
else if(grade == "D"){
    console.log("You passed..barely!");
}
else if(grade == "F"){
    console.log("You fucking failed! dumbass bitch!!!!!!!!!");
}

else{
    console.log(grade, " is not a letter grade!!!!");
}

*/
/*
var grade = window.prompt("Enter your grade")
switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed..barely!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log(grade, "is not a grade letter");
        
    
        
} */
 
let grade = window.prompt("Enter a fucking number please");


switch(true){
    case grade >= 90:         // You need to add a colon after every case not a semi-colon
        console.log("You did great!");
        break;
    case grade >=80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed..barely!");
        break;
    case grade < 60:
        console.log("You failed!");
        break;
    default:
        console.log(grade, "is not a letter grade");
        
    
        
}
