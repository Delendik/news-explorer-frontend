import React, { useState } from 'react';
import './index.css';

function SearchForm({onClick}){
  const [searchText, setSearchText] = useState('');
  
  function handleChange(e){
    setSearchText(e.target.value);
  }

  const onFocus =()=> {
    setSearchText(true)
  }

  const onBlur =()=> {
    setSearchText(false)
  }
  
  return(
    <div className="search-form">
      <div className="search-form__container">
        <input className="searh-form__input" placeholder="Введите тему новости" required onChange={handleChange} onFocus={onFocus} onBlur={onBlur}></input>
      </div>
      <button className={searchText ? "searh-form__button searh-form__button_active" : "searh-form__button"} onClick = {onClick}> Искать </button>
    </div>
    
  )
}

export default SearchForm;