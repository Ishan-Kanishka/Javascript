const answer = Math.floor(Math.random() * 10 + 1);

//What does the keyword floor does ? :Floor will always round a number down
//random will generate a ranodm real number

let guesses = 0;

document.getElementById("submitButton").onclick = function (){
  let guess = document.getElementById("guessField").value
  guesses +=1;
  if(guess == answer){
    alert(`${answer} is the #.It took you ${guesses} guesses.`)
  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!");
  }
}
//Goofy ahh bitch tryna look tough 
//This is gonna be last time IM coding wtf is this My stupid brain is itchy now 