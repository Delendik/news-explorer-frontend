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
        <div className="card__picture" style={{backgroundImage: `url(${image})`}} />
        <div className={markCard ? " card__mark card__marked" : "card__mark card__unmarked"} onClick={markedCard} />
      </div>
      <div className="card__down">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a className="card__link" href={link}>{source}</a>
      </div>
    </div>
  )
} else{
  return(
    <div className="card__container">
      <div className="card__up">
      <div className="card__picture" style={{backgroundImage: `url(${image})`}} />
        <div className="card__saveInfo" style={ saveInfo ? {display:  'flex' } : {display:  'none'}}>
          <p className="card__saveTitle">Войдите, чтобы сохранять статьи</p>
        </div>
        <div className={markCard ? " card__mark card__marked" : "card__mark card__unmarked"} onClick={markedCard} onMouseOver={hoverMark} onMouseOut={hoverMarkOut} />
      </div>
      <div className="card__down">
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a className="card__link" href={link}>{source}</a>
      </div>
    </div>
  )
}
  
};

export default NewCard;