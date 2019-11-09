
// let player1 = Number.parseInt(document.querySelector(".player1").innerHTML);
// let player2 = Number.parseInt(document.querySelector(".player2").innerHTML);

// let playerOneButton = document.querySelector(".playerOne");
// let playerTwoButton = document.querySelector(".playerTwo");

// playerOneButton.addEventListener("click", function(){
//    let val1 = player1++;
//    document.querySelector(".player1").innerHTML = val1;
// })

// playerTwoButton.addEventListener("click", function(){
//     let val2 = player2++;
//    document.querySelector(".player2").innerHTML = val2;
// })

// let score = document.querySelector("input").value;
// document.querySelector(".maxscore").innerHTML = score;


let playerOneButton = document.querySelector(".playerOne");
let player1 = document.querySelector(".player1");
// let win = document.querySelector("play1");
let playerTwoButton = document.querySelector(".playerTwo");
let player2 = document.querySelector(".player2");
let resetButton = document.querySelector(".reset");
let input = document.getElementById("input");
let maxscore = document.querySelector(".maxscore");
let score1 = 0;
let score2 = 0;
let winningScore = 5;
let gameOver = false;



   

   playerOneButton.addEventListener("click", function(){
      if (!gameOver) {
         score1++;
         if (score1 ===  winningScore) {
            gameOver = true;
         }
         player1.innerHTML = score1;
      };
   })



   playerTwoButton.addEventListener("click", function(){
      if (!gameOver) {
         score2++;
         if (score2 ===  winningScore) {
            gameOver = true;
         }
         player2.innerHTML = score2;
      };
   })


resetButton.addEventListener("click", function(){
   score1 = 0;
   score2 = 0;
   gameOver = false;
   player1.innerHTML = score1;
   player2.innerHTML = score2;
})

input.addEventListener("change", function(){
   maxscore.innerHTML = Number(input.value);
})



// let playerOneButton = document.querySelector(".playerOne");
// let player1 = document.querySelector(".player1");
// let playerTwoButton = document.querySelector(".playerTwo");
// let player2 = document.querySelector(".player2");
// let resetButton = document.querySelector(".reset");
// let input = document.getElementById("input");
// let maxscore = document.querySelector(".maxscore");
// let score1 = 0;
// let score2 = 0;
// let gameOver = false;
// let gameStarted;
// alert("Set Your Target Score at 'Playing to' Section to start Game");


// input.addEventListener("change", function(){
//    gameStarted = true;
//    maxscore.innerHTML = Number(input.value);
//    startGame();
//    gameStarted = false;
// })



// function startGame() {
   

//    playerOneButton.addEventListener("click", function(){
//       if (!gameOver) {
//          score1++;
//          if (score1 === maxscore.innerHTML) {
//             gameOver = true;
//          }
//          player1.innerHTML = score1;
//       };
//    })



//    playerTwoButton.addEventListener("click", function(){
//       if (!gameOver) {
//          score2++;
//          if (score2 === maxscore.innerHTML) {
//             gameOver = true;
//          }
//          player2.innerHTML = score2;
//       };
//    })

// }

// resetButton.addEventListener("click", function(){
//    score1 = 0;
//    score2 = 0;
//    gameOver = false;
// player1.innerHTML = score1;
// player2.innerHTML = score2;
//})
