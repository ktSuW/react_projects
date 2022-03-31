import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/bit.png", matched: false },
  { src: "/img/lights.png", matched: false },
  { src: "/img/link.png", matched: false },
  { src: "/img/pin.png", matched: false },
  { src: "/img/set_up.png", matched: false },
  { src: "/img/sushi.png", matched: false },
  { src: "/img/tree.png", matched: false },
  { src: "/img/voting.png", matched: false },
];

// Duplicate each card once
// Randomise the order of the card in the array
// Apply random ID to each card and use the ID as a key for React when outputing to Grid
const App = () => {
  // Create states to store cards in for a particular game
  const [cards, setCards] = useState([]);
  // How many turns the users is taking to complete the game
  const [turns, setTurns] = useState(0);
  // Card States after choosing
  // If you click on the first card, that particular card will get updated to choiceOne
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  // Shuffle Cards
  const shuffleCards = () => {
    // Duplicate the cards using spread operator with id for each card
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    //=============================================================
    // const shuffledCards = [...cardImages, ...cardImages].sort(
    //   () => Math.random() - 0.5
    // );
    // for (let i = shuffledCards.length - 1; i > 0; i--) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   // let temp = shuffledCards[i];
    //   // shuffledCards[i] = shuffledCards[j];
    //   // shuffledCards[j] = temp;
    //   // destructuring
    //   [shuffledCards[i], shuffledCards[j]] = [
    //     shuffledCards[j],
    //     shuffledCards[i],
    //   ];
    // }
    // shuffledCards.map((card) => ({ ...card, id: Math.random() }));
    //================================================================
    //reset them just in case if only one card is still selected.
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    // After game reset, the turn should be back to 0.
    setTurns(0);
  };

  //Handle a choice
  const handleChoice = (card) => {
    // console.log(card);
    // Identify whether the card is choiceOne or choiceTwo
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare two selected cards
  // Use useEffect hooks
  // pass in function and dependency array as second argument - [choiceOne, choiceTwo]
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        // console.log("Match!");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // console.log("NO match!");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // console.log(cards);

  // After selecting 2 cards, reset and increase turn
  // Invoke this function whether the cards are matched or not
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns : {turns} </p>
      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
