import React, { useState } from 'react';
import './index.css';
import * as MainApi from '../../utils/MainApi';

function SavedCard({_id, keyword, title, text, date, source, link, image, marked, id, loginIn, token, handleDeleteCard}){
  const [markCard, setMarkCard] = useState(marked)
  const [saveInfo, setsaveInfo] = useState(false);
  
  const markedCard = () => {
      handleDeleteCard(_id)
  }

  const hoverMark = () => {
    setsaveInfo(true);
  }

  const hoverMarkOut = () => {
    setsaveInfo(false);
  }
  
  return(
    <div className="savedCard__container">
      <div className="savedCard__up">
        <div className="savedCard__keyword">{keyword}</div>
        <img className="card__picture" src={image} alt="кртинка новости" />
        <div className="savedCard__deleteInfo" style={ saveInfo ? {display:  'flex' } : {display:  'none'}}>
          <p className="savedCard__deleteTitle">Убрать из сохранённых</p>
        </div>
        <div 
          className="savedCard__trash"
          onClick={markedCard} 
          onMouseOver={hoverMark} 
          onMouseOut={hoverMarkOut} 
        />
      </div>
      <div className="savedCard__down">
        <p className="savedCard__date">{date}</p>
        <h3 className="savedCard__title">{title}</h3>
        <p className="savedCard__text">{text}</p>
        <a className="savedCard__link" href={link} target="_blank" rel="noreferrer">{source}</a>
      </div>
    </div>
  )  
};

export default SavedCard;