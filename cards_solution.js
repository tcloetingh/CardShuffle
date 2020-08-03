// The following code is JavaScript and this class upon instantiation will produce a deck with 52 cards.
// The answer to each question is an appropriately name class method.
// Results from each method are logged on the console.
// Run in the browser as an attached script tag to an html file
// Run on the CLI if using NodeJS.
// To solve all the problems took me about 2.5 hours (I'm proud to say that I did not cheat)

class Cards {
  constructor() {
    this.deck = [];
    this.shuffled = [];
    const suits = ["Spade", "Heart", "Club", "Diamond"];
    const rank = [
      "Ace",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Jack",
      "King",
      "Queen"
    ];

    for (let s = 0; s < suits.length; s++) {
      for (let i = 0; i < rank.length; i++) {
        let card = `${rank[i]} of ${suits[s]}`;
        this.deck.push(card);
      }
    }
  }

  shuffle(shuffles = 1) {
    let { deck, shuffled } = this;
    let left = [];
    let right = [];
    let tempDeck = deck;

    for (let s = 1; s <= shuffles; s++) {
      shuffled = [];
      right = tempDeck.slice(0, deck.length / 2);
      left = tempDeck.slice(deck.length / 2, deck.length);
      for (let i = 0; i < 26; i++) {
        shuffled.push(left[i]);
        shuffled.push(right[i]);
        tempDeck = shuffled;
      }
    }
    console.log(shuffled);
    return (this.shuffled = shuffled);
  }

  topCardtoBottom() {
    let counter = 1;
    while (this.shuffled[51] !== "Ace of Spade") {
      this.shuffle(counter);
      counter++;
    }
    console.log(
      `The top card will be on the bottom after shuffle ${counter - 1}`
    );
  }

  indexAtSeven() {
    this.shuffle(7);
    const foundIt = this.shuffled.indexOf("Ace of Spade") + 1;
    console.log(this.shuffled);
    console.log(
      `After the seventh suffle the Ace of Spades is position ${foundIt} in the deck`
    );
  }

  firstTouchLast(card1, card2) {
    let counter = 1;
    while (counter >= 1) {
      this.shuffle(counter);
      const ind1 = this.shuffled.indexOf(card1);
      const ind2 = this.shuffled.indexOf(card2);
      if (ind1 === ind2 - 1 || ind1 === ind2 + 1) {
        break;
      } else {
        counter++;
      }
    }
    console.log(`The cards will touch after shuffle ${counter}`);
  }
}

const myDeck = new Cards();

myDeck.indexAtSeven();
myDeck.topCardtoBottom();
myDeck.firstTouchLast("Ace of Spade", "Queen of Diamond");
myDeck.shuffle(26);
