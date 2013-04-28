/** Codecademy Blackjack Project
  * Suit is represented by the numbers 1-4 (clubs, diamonds, hearts, and
  * spades respectively). Number is represented by 1-13, 1 is Ace 2-10 are
  * face value, 11-13 are J, Q, K.
  */

// Card Constructor
function Card(a, b){
    var suit = a;
    var number = b;
    
    this.getSuit = function(){
        return suit;
    };
    this.getNumber = function(){
        return number;
    };
    this.getValue = function(){
        if(number>10){
			return 10;
		} else if (number === 1){
			return 11;
		} else{
			return number;
		}
    };
}

function Hand() {
	var cards = [];
	
	cards.push(deal());
	cards.push(deal());
	
	this.getHand = function(){
		return cards;
	};
}

function deal(){
	var randSuit = Math.floor(Math.random()*4+1);
	var randNum = Math.floor(Math.random()*13+1);
	
	var card = new Card(randSuit, randNum);
	return card;
}