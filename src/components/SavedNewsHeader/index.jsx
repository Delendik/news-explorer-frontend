import React, { useEffect, useState } from 'react';
import './index.css';

function SavedNewsHeader({number, userName, savedCards}){
  const [subtitle, setSubtitle] = useState([]);

  const reducer = (map, val) => {
    if (map[val] == null) {
      map[val] = 1;
    } else {
      ++map[val];
    }
    return map;
  };
  var keywordsArray = savedCards.map(char => char.keyword).reduce(reducer, []);

  var sortKeywordsArray = Object.keys(keywordsArray).sort(function(a, b) { return keywordsArray[a] - keywordsArray[b] }).reverse();

  useEffect(() => {
    if(Object.keys(keywordsArray).length<4){
      setSubtitle(sortKeywordsArray.join(', '));
    }else{
      setSubtitle(sortKeywordsArray.slice(0, 2).join(', '))
    }
  }, [])

  return(
    <div className="savedNewsHeader__container">
      <h2 className="savedNewsHeader__title">Сохранённые статьи</h2>
      <h3 className="savedNewsHeader__subtitle">{userName}, у вас {number} сохранённых статей</h3>
      <p className="savedNewsHeader__about">По ключевым словам: <span className="savedNewsHeader__info">{subtitle} {Object.keys(keywordsArray).length>3 ?  `и ${Object.keys(keywordsArray).length-2}-м другим` : null}</span> </p>
    </div>
  )
};

export default SavedNewsHeader;