import React, { useState } from 'react';
import './index.css';
import * as MainApi from '../../utils/MainApi';

function NewCard({id, title, text, date, source, link, image, marked, loginIn, token, keyword, large, handleAddCard, handleDeleteCard, savedCards}){
  let markCard = false
  const [saveInfo, setsaveInfo] = useState(false);
  const card = {keyword, title, text, date, source, link, image, marked};
  var dateToPrint = new Date(date);
  
  let newFormatDate = (new Intl.DateTimeFormat("ru", {
    month: "long",
    day: "numeric"
  }).format(dateToPrint) + ', ' + new Intl.DateTimeFormat("ru", {
    year: "numeric",
  }).format(dateToPrint))

  

  const arrayForChecking = savedCards.map(item => {return `${item.title}-${item.source}`});
  console.log('arrayForChecking', arrayForChecking)
  // const cardId = savedCards.map(item => {return `${item.title}-${item.source}`});
  const checkCards = arrayForChecking.includes(id)
  if(checkCards){
    console.log('card', card)
    markCard = true;
  }

  // const xxx = savedCards.map(item => {return item.source})
// if(xxx){
//   setMarkCard(true)
// }

  const markedCard = () => {
    if(markCard){
      console.log(card._id);
      markCard = false;
    } else{
      if (card.image===null){
        card.image = 'https://photowords.ru/pics_max/images_2636.jpg'
        handleAddCard(card);
      }else{
        handleAddCard(card);
        console.log(card)
      }
      
      markCard = true
    }
    
    // setMarkCard(!markCard);
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
        <img className="card__picture" src={image} alt="картинка новости" />
        <div className={markCard ? " card__mark card__marked" : "card__mark card__unmarked"} onClick={markedCard} />
      </div>
      <div className="card__down">
        <p className="card__date">{newFormatDate}</p>
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
      <img className="card__picture" src={image} alt="картинка новости" />
        <div className="card__saveInfo" style={ saveInfo ? {display:  'flex' } : {display:  'none'}}>
          <p className="card__saveTitle">Войдите, чтобы сохранять статьи</p>
        </div>
        <div className=" card__mark card__unmarked"  onMouseOver={hoverMark} onMouseOut={hoverMarkOut} />
      </div>
      <div className="card__down">
        <p className="card__date">{newFormatDate}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a className="card__link" href={link} target="_blank" rel="noreferrer">{source}</a>
      </div>
    </div>
  )
}
  
};

export default NewCard;