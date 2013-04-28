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

//Hand constructor, initialized with 2 cards
function Hand() {
	var cards = [];
	
	cards.push(deal());
	cards.push(deal());
	
	this.getHand = function(){
		return cards;
	};
	
	this.score = function(){
		var sum = 0;
		for( var i=0 ; i<cards.length ; i++){
			sum += cards[i].getValue();
		}
		return sum;
	};
	
	this.printHand = function() {
		var str = "";
		var suit = "";
		var face = "";
		for(var i = 0; i<cards.length ;i++){
			if(cards[i].getSuit() === 1){
				suit = "Clubs";
			} else if (cards[i].getSuit() === 2){
				suit = "Diamonds";
			} else if (cards[i].getSuit() === 3){
				suit = "Hearts";
			} else {
				suit = "Spades";
			}
			
			if(cards[i].getNumber() === 11) {
				face = "Jack";
			} else if(cards[i].getNumber() === 12) {
				face = "Queen";
			} else if(cards[i].getNumber() === 13) {
				face = "King";
			} else if(cards[i].getNumber() === 1) {
				face = "Ace";
			} else
				face = cards[i].getNumber();
				
			str += face + " of " + suit + "\n";
		}
		
		return str;
	};
}

function deal(){
	var randSuit = Math.floor(Math.random()*4+1);
	var randNum = Math.floor(Math.random()*13+1);
	
	var card = new Card(randSuit, randNum);
	return card;
}

hands = new Hand();
console.log(hands.printHand());
console.log(hands.score());