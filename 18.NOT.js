// ! Not logical operator
// typically used to reverse a condition's boolean value
// true -> false     fale-> true

let temp = 15;
let sunny = true;


if (!(temp > 0)) { // If our temp is not greater than zero
    console.log("It's cold outside"); // precede means adding something to the front of a line
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's Sunny outside");
}