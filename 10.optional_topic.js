/*let x = Math.floor(Math.random() * 6) + 1; //this generates a random decimal number between 0 and 1
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;
*/

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function() {

    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    let z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;


}

