//Javascript to run countdown timer
function countdownTimer() {
  var currTime = 55;
  document.getElementById("countdown").innerHtml = currTime;
  currTime = currTime - 5;

//Start timer at 50
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 0);

//Timer for 45
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 5000);

//Timer for 40
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 10000);

//Timer for 35
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 15000);

//Timer for 30
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 20000);

//Timer for 25
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 25000);

//Timer for 20
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 30000);

//Timer for 15
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 35000);

//Timer for 10
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 40000);

//Timer for 5
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 45000);

//Timer for Blastoff! when countdown finishes
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = "Blastoff!";
      currTime = currTime - 5;
  }, 50000);
}

//function called playcraps, starts when button linked to playcraps() is clicked
function playcraps(){
//defining var die1. Generates random number from 0 to 1. Ceiling rounds up and multiply by 6 to get 1 through 6 for dice.
  var die1 = Math.ceil(Math.random() * 6);
//defining var die1. Read comment above.
  var die2 = Math.ceil(Math.random() * 6);
//Taking div from html and naming it die1 for javascript use
  document.getElementById("die1sta").innerHTML = die1;
//See comment above
  document.getElementById("die2sta").innerHTML = die2;
//Defining the variable dieSum to be the total of both dice rolls
  var dieSum = die1 + die2;
//Taking div from html and namking it dieSum
  document.getElementById("diceSum").innerHTML = dieSum;
//if the sum of the dice equals 7 or 11, then do the line below
  if(dieSum == 7 || dieSum == 11){
//Change the div to say Craps! You Lose!
    document.getElementById("crapsStatus").innerHTML = "Craps! You lose!";
//If both dice rolls equal the same number and is even, then do the line below
  }else if(die1 == die2 && die1 % 2 == 0){
//Change the div to say Doubles! You Win!
    document.getElementById("crapsStatus").innerHTML = "Doubles! You Win!";
  }
  //If if or else if above can't be met, then do the line below
  else{
//Change the div to say You did not lose, in order to keep updates till you win or lose.
    document.getElementById("crapsStatus").innerHTML = "You did not lose";
  }
}

//for() loop for countdown timer. Counts down from 50 till 0 in 5 second increments. Once hits 0, says Blastoff!
function btrCountdownTimer(){
  var currTime = 50;
  for(var i = 0; i < 10; i++){
setTimeout(function(){
  document.getElementById("countdown").innerHTML = currTime;
  currTime = currTime -5;
},5000 * i);
  }
  setTimeout(function(){
  document.getElementById("countdown").innerHTML = "Blastoff!";
},50000);
}
