/** Codecademy Blackjack Project
  * Suit is represented by the numbers 1-4 (clubs, diamonds, hearts, and
  * spades respectively). Number is represented by 1-13, 1 is Ace 2-10 are
  * face value, 11-13 are J, Q, K.

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
        
    }
}