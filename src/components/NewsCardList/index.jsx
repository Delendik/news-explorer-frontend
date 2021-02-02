import React, { useState } from 'react';
import './index.css';
import NewCard from '../NewsCard';
import SavedCard from '../SavedCard';
import MoreCardsButton from '../MoreCardsButton';

function NewsCardList({displayCard, loginIn, savedNews, cards, token, savedCards, handleDeleteCard, handleAddCard}){
  const [numberForDisplay, setNumberForDisplay] = useState(3);

  const handleClick = () =>{
    setNumberForDisplay(numberForDisplay + 3);
  } 

  const cardsForDisplay = cards.slice(0, numberForDisplay);

  if(savedNews){
    if(savedCards.length<1){
      return(<></>);
    }else{
      return(
        <div className="newCardList__container newCardList__container_saved">
          <ul className="newCardList__table newCardList__table_saved">
            {
              savedCards.map(card => <SavedCard key={`${card.title}-${card.source}`} {...card} loginIn={loginIn} savedNews={savedNews} token={token} savedCards={savedCards} handleDeleteCard={handleDeleteCard} />) 
            }
          </ul>
        </div>
      )
    }
    
  } else{
    if(cardsForDisplay<1){
      return(
        <div className="newCardList__container newCardList__emptyList" style={ displayCard ? {display:  'block' } : {display:  'none'}}>Ничего не найдено</div>
      )
    } else{
      return(
        <div className="newCardList__container" style={ displayCard ? {display:  'block' } : {display:  'none'}} >
          <h2 className="newCardList__title">Результаты поиска</h2>
          <ul className="newCardList__table">
            {
              cardsForDisplay.map(card => <NewCard key={`${card.title}-${card.source}`} {...card} loginIn={loginIn} token={token} handleAddCard={handleAddCard} handleDeleteCard={handleDeleteCard} savedCards={savedCards} />) 
            }
          </ul>
          <MoreCardsButton onClick = {handleClick} />
        </div>
      )
    }
  }
};

export default NewsCardList;
