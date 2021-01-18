import React, { useState } from 'react';
import './index.css';

function NewCard({title, text, date, source, link, image, marked, loginIn}){
  const [markCard, setMarkCard] = useState(marked)
  const [saveInfo, setsaveInfo] = useState(false);
 
  const markedCard = () => {
    setMarkCard(!markCard);
  }

  const hoverMark = () => {
    setsaveInfo(true);
  }

  const hoverMarkOut = () => {
    setsaveInfo(false);
  }
  
if(loginIn){
  return(
    <div className="card__container">
      <div className="card__up">
        <img className="card__picture" src={image} alt="кртинка новости" />
        <div className={markCard ? " card__mark card__marked" : "card__mark card__unmarked"} onClick={markedCard} />
      </div>
      <div className="card__down">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a className="card__link" href={link} target="_blank" rel="noreferrer">{source}</a>
      </div>
    </div>
  )
} else{
  return(
    <div className="card__container">
      <div className="card__up">
      <img className="card__picture" src={image} alt="кртинка новости" />
        <div className="card__saveInfo" style={ saveInfo ? {display:  'flex' } : {display:  'none'}}>
          <p className="card__saveTitle">Войдите, чтобы сохранять статьи</p>
        </div>
        <div className=" card__mark card__unmarked"  onMouseOver={hoverMark} onMouseOut={hoverMarkOut} />
      </div>
      <div className="card__down">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a className="card__link" href={link} target="_blank" rel="noreferrer">{source}</a>
      </div>
    </div>
  )
}
  
};

export default NewCard;