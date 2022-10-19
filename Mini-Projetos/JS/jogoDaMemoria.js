const cardBoard = document.querySelector("#cardboard");
const imgs = [
    "vue.svg",
    "angular.svg",
    "react.svg",
    "ember.svg",
    "backbone.svg",
    "aurelia.svg"
];

let cardHTML = "";

imgs.forEach(img => {
    cardHTML += 
    `<div class="memory-card" data-card="${img}">
      <img class="front-face" src="IMAGENS/${img}">
      <img class="back-face" src="IMAGENS/js-badge.svg">
    </div>`;
});
  
cardBoard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let loockCards = false;

function flipCard(){
    if(loockCards) return false;
    this.classList.add("flip");

    if(!firstCard){
        firstCard = this;
        return false;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards(){
    loockCards = true;
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetCards();
    }, 1000);
}

function resetCards(isMatch = false){
    if(isMatch){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }

    [firstCard, secondCard, loockCards] = [null, null, null];
}

cards.forEach(card => card.addEventListener("click", flipCard()));
