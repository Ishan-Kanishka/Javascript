//HOW TO ACCEPT USER INPUT

//Easy way with a window prompt

//let username = window.prompt("What's your name");
//console.log(username);






//Difficult way with HTML textbox

document.getElementById("myButton").onclick = function () {
//what does this basically do ?
//this is the most annoying part I ever encouter while coding this shit is so annnoying 

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;

}