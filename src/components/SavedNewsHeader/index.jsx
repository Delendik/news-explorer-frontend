import React from 'react';
import './index.css';

function SavedNewsHeader({number}){
  return(
    <div className="savedNewsHeader__container">
      <h2 className="savedNewsHeader__title">Сохранённые статьи</h2>
      <h3 className="savedNewsHeader__subtitle">Грета, у вас {number} сохранённых статей</h3>
      <p className="savedNewsHeader__about">По ключевым словам: <span className="savedNewsHeader__info">Природа, Тайга и 2-м другим</span> </p>
    </div>
  )
};

export default SavedNewsHeader;