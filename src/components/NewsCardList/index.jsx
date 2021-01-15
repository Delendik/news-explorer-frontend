import React, { useState } from 'react';
import './index.css';
import { initialCards } from '../../utils/initialCards';
import NewCard from '../NewsCard';
import SavedCard from '../SavedCard';
import MoreCardsButton from '../MoreCardsButton';

function NewsCardList({displayCard, loginIn, savedNews}){
  const [numberForDisplay, setNumberForDisplay] = useState(3);
  const handleClick = () =>{
    setNumberForDisplay(numberForDisplay + 3);
  }
  const cardsForDisplay = initialCards.slice(0, numberForDisplay);

  const savedCards = initialCards.filter(card => card.marked)

  if(savedNews){
    return(
      <div className="newCardList__container newCardList__container_saved">
        <ul className="newCardList__table newCardList__table_saved">
          {
            savedCards.map(card => <SavedCard key={card._id} {...card} loginIn={loginIn} savedNews={savedNews} />) 
          }
        </ul>
      </div>
    )
  } else{
    return(
      <div className="newCardList__container" style={ displayCard ? {display:  'block' } : {display:  'none'}} >
        <h2 className="newCardList__title">Результаты поиска</h2>
        <ul className="newCardList__table">
          {
            cardsForDisplay.map(card => <NewCard key={card._id} {...card} loginIn={loginIn}  />) 
          }
        </ul>
        <MoreCardsButton onClick = {handleClick} />
      </div>
    )
  }
};

export default NewsCardList;
