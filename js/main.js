
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay =[];
var checkForMatch = function() {
    /* flip the card */
    if (cardsInPlay.length === 2){

         if(cardsInPlay[0].rank === cardsInPlay[1].rank) {

             alert("You found a match!");

        } else {
            alert("Sorry, try again!");
        }
    }
    else alert("Ok Select another card!");
};
var flipCard = function () {

    var cardId = this.getAttribute("data-id");

    this.setAttribute("src", cards[cardId].cardImage);

    cardsInPlay[cardsInPlay.length] = cards[cardId];

    console.log("Cards in Play" + " " + cardsInPlay.length);
    console.log("Card Saved is" + " " + cardsInPlay[cardsInPlay.length-1].cardImage);
    console.log("User flipped" + " " + cards[cardId].rank);
    console.log("User flipped" + " " + cards[cardId].cardImage);
    console.log("User flipped" + " " + cards[cardId].suit);
    console.log("User flipped" + " " + cardId);
    checkForMatch();

};

var createBoard = function () {
for (var i = 0; i < cards.length; i++) {

    var newCard = document.createElement('img');
    newCard.setAttribute("src", "images/back.png");
    newCard.setAttribute("data-id", i);
    document.getElementById("game-board").appendChild(newCard);
    newCard.addEventListener("click", flipCard);
}
};
createBoard();