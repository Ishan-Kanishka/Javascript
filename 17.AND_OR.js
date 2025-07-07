//Gives us the ability to check more than one condition concurrently(simultaneously)
//&& AND (BOTH condition must be true) & ampersand
// || OR (Either conditon can be true)

let temp = 15;


   if(temp > 0 && temp <30 ){ //you can check more than on condition by using AND logical 
                              //operator
    console.log("The weather is good!");
   }
   else{
    console.log("The weather is bad!");
   }



   if(temp > 16 || temp <10 ){ //you can check more than on condition by using AND logical 
                              //operator
    console.log("The weather is good!");
   }
   else{
    console.log("The weather is bad!");
   }

   //You can use multiple logical operators in coding
let sunny = true;

if(temp > 0 && temp < 30 && sunny){
    console.log("The weather is good!");

}
else{
    console.log("The weather is bad!");
}

   