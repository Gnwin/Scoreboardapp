
let player1 = Number.parseInt(document.querySelector(".player1").innerHTML);
let player2 = document.querySelector(".player2").innerHTML;

let playerOneButton = document.querySelector(".playerOne");
let playerTwoButton = document.querySelector(".playerTwo");

playerOneButton.addEventListener("click", function(){
   let val = player1++;
   document.querySelector(".player1").innerHTML = val;
})

playerTwoButton.addEventListener("click", function(){
    player2++;
})

console.log(typeof player1);