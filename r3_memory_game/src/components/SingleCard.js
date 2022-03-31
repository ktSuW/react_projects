import React from "react";
import "./SingleCard.css";

// accept card : destructuring
const SingleCard = ({ card, handleChoice, flipped , disabled}) => {
  // Update the state in the App component
  // However, you cannot set State directly from here
  const handleClick = ()=>{
    // you cannot make another choice while the state is disabled 
    // only when disabled is false
    if(!disabled){
      handleChoice(card);
    }
  }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src='img/cover.png'
          onClick={handleClick}
          alt='card back'
        />
      </div>
    </div>
  );
};

export default SingleCard;
