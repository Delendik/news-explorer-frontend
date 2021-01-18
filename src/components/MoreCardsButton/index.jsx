import React from 'react';
import './index.css'

function MoreCardsButton({onClick}){
  return(
    <button className="moreCardsButton__container" onClick = {onClick}>
      Показать еще
    </button>
  )
};

export default MoreCardsButton;