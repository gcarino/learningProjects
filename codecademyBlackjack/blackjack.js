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
		var aces = 0;
		
		for( var i=0 ; i<cards.length ; i++){
			sum += cards[i].getValue();
			if(cards[i].getValue() === 11)
				aces++;
		}
		
		while(aces>0 && sum>21){
			aces--;
			sum -= 10;
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
	
	this.hitMe = function() {
		cards.push(deal());
	};
}

//Returns a Card object of a random card
function deal(){
	var randSuit = Math.floor(Math.random()*4+1);
	var randNum = Math.floor(Math.random()*13+1);
	
	var card = new Card(randSuit, randNum);
	return card;
}

//Creates a dealer hand and follows dealer rules on hitting
function playAsDealer(){
	dealerHand = new Hand();
	
	if(dealerHand.score() < 17){
		dealerHand.hitMe();
	}
	
	return dealerHand;
}

//Gives the user the ability to play their hand
function playAsUser(){
	player = new Hand();
	var decision;
	do {
		decision = confirm("Your hand:\n" + player.printHand() +
			"Your score is: " + player.score() + 
			"\nDo you want to hit?");
		if(decision){
			player.hitMe();
		}
	} while (decision);
	
	return player;
}

//Determines winner, and returns a string with result
function declareWinner(userHand, dealerHand){
	var userBust = userHand.score() > 21;
	var dealerBust = dealerHand.score() > 21;
	var userWin = (!userBust) &&
		((userHand.score() > dealerHand.score()) ||
		dealerBust);
	 
	if(userWin){
		return "You win!";
	} else if( userHand.score() === dealerHand.score() ||
			(userBust && dealerBust)){
		return "You tied!";
	} else{
		return "You lose!";
	}
}

//Function that controls the game
function playGame(){
	var player = playAsUser();
	var dealer = playAsDealer();
	var win = declareWinner(player, dealer)
	
	console.log("Your hand:\n" + player.printHand());
	console.log("Your score: "+ player.score() +"\n");
	console.log("Dealer hand:\n" +dealer.printHand());
	console.log("Dealer score: "+ dealer.score() + "\n");
	console.log(win);
}

playGame();
