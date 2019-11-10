// selects player one button and player one score
let playerOneButton = document.querySelector(".playerOne");
let player1 = document.querySelector(".player1");
// selects player two button and player two score
let playerTwoButton = document.querySelector(".playerTwo");
let player2 = document.querySelector(".player2");
// selects reset button
let resetButton = document.querySelector(".reset");
// selects input field
let input = document.getElementById("input");
// selects PLAYING TO: display area
let maxscore = document.querySelector(".maxscore");
// assigns an independent score to an initial value of zero 
let score1 = 0;
let score2 = 0;
// At game start, gameOver initial state of the game is false
let gameOver = false;


// 'PLAYING TO: display area' is updated to typed numbers in the input field or increased numbers in the input field 
input.addEventListener("change", function(){
   maxscore.innerHTML = input.value;
})

// checks if the input field still has an initial value of zero before starting the game. 
playerOneButton.addEventListener("click", function(){
   if(input.value == 0) {
      alert("set your scorepoint IN TEXT FIELD");
      return;
   }
   // sets winning score to value of input and checks if the incremented score is similar to winning score.
   let winningScore = parseInt(input.value);
   if (!gameOver) {
      score1++;
      if (score1 ===  winningScore) {
         gameOver = true;
         player1.style.color = "blue";
      }
      player1.innerHTML = score1;
   }; 
})



playerTwoButton.addEventListener("click", function(){
   if(input.value == 0) {
      alert("set your scorepoint IN TEXT FIELD");
      return;
   }
   let winningScore = parseInt(input.value);
   if (!gameOver) {
      score2++;
      if (score2 ===  winningScore) {
         player2.style.color = "blue";
         gameOver = true;
      }
      player2.innerHTML = score2;
   };
})


resetButton.addEventListener("click", function(){
   score1 = 0;
   score2 = 0;
   input.value = "0";
   maxscore.innerHTML = 0;
   gameOver = false;
   player1.innerHTML = score1;
   player2.innerHTML = score2;
   player1.style.color = "black";
   player2.style.color = "black";
})



// playerOneButton.addEventListener("click", function(){
//    let val1 = player1++;
//    document.querySelector(".player1").innerHTML = val1;
// })
