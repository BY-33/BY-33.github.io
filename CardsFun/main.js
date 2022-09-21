//object - store data in depth - composite / complex data type
//key-value pairs
let player = {
    playername : prompt(),
    playerprice : 140
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent =  player.playername + " $"+ player.playerprice;
function getRandomNumber(){
    let b = Math.floor((Math.random()*13)+1);
    if(b >10)
    {
        return 10;
    }
    else if(b === 1)
    {
        return 11;
    }
    else
    {
        return b;
    }
}

//start button
function startgame(){

}

function startgame(){
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard,secondCard];
    sum =  firstCard + secondCard;
    // messageEl.textContent = "wooh! get ready, click on New Card!🎴";
    renderGame();
}
 function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "draw a new card 😇";
    }
    else if(sum === 21){
        message = "wooooh! you've got balackjack! 😊";
        hasBlackJack = true; 
    }
    else{
        message = "you're out of the game!😊"; 
        isAlive = false;  
    }
   messageEl.textContent =  message;
}
//new button
function newCard(){
  if(isAlive === true && hasBlackJack === false){
    let card = getRandomNumber()
    sum += card;
    cards.push(card)
    renderGame();
    
  }
}
// a = cardEl.textContent = "Cards: " + Math.floor((Math.random()*13)+1);
// sum = sum + a;
//mathematical operation is done here
// function operation(){
    
   
    
// }
//output function
// function results(){
//         sumEl.textContent = "Sum : " + sum;
//         cardEl.textContent = "card: " + card;
//         if(sum <=20){
//             messageEl.textContent =  "draw a new card 😇";
//         }
        
// }
//message which displays the stage