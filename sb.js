
let player1 = Number.parseInt(document.querySelector(".player1").innerHTML);
let player2 = Number.parseInt(document.querySelector(".player2").innerHTML);

let playerOneButton = document.querySelector(".playerOne");
let playerTwoButton = document.querySelector(".playerTwo");

playerOneButton.addEventListener("click", function(){
   let val1 = player1++;
   document.querySelector(".player1").innerHTML = val1;
})

playerTwoButton.addEventListener("click", function(){
    let val2 = player2++;
   document.querySelector(".player2").innerHTML = val2;
})

let score = document.querySelector("input").value;
// document.querySelector(".maxscore").innerHTML = score;
