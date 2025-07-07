//All the check properties does is to let us know if a check box or radio button is selected 
//or not

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")

    if(myCheckBox.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("You are not subscribed!");
    }





    if (visaBtn.checked){

        console.log("You are paying with visa");
        
    }

    else if (mastercardBtn.checked){

        console.log("You are paying wiht master card");
    }

    else if(paypalBtn.checked){

        console.log("You are paying wiht paypal");
    }
    else{
        console.log("You must select a payment type");
    }   


}