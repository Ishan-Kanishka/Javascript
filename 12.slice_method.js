// slice()



let fullName = "Brainy GameMind"; // Last one will not be printed and starts with 0 ZERO ahhh
let firstName;
let lastName;
//firstName = fullName.slice(0, 5); 
lastName  = fullName.slice(6+1); // you don't always have to put the starting point, unless it's 0


console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName  = fullName.slice(fullName.indexOf(" ")+ 1); // because the first value is inclusive 
                    //So bitch this is a number so u can add any fucking number dumbass prick 
                   //The 6 is inclusive 
                                                     //in this case inclusive means not 
console.log(firstName);                              //including anything 
console.log(lastName);


