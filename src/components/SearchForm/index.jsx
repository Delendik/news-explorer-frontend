import React, { useState } from 'react';
import './index.css';

function SearchForm({onClick}){
  const [searchText, setSearchText] = useState('');
  
  function handleChange(e){
    setSearchText(e.target.value);
  }

  return(
    <div className="search-form">
      <div className="search-form__container">
        <input className="searh-form__input" placeholder="Введите тему новости" onChange={handleChange}></input>
      </div>
      <button className="searh-form__button" onClick = {onClick}> Искать </button>
    </div>
    
  )
}

export default SearchForm;