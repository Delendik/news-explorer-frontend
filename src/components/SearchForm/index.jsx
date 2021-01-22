import React, { useState } from 'react';
import './index.css';

function SearchForm({onClick, CheckText}){
  const [searchText, setSearchText] = useState('');
  const [focusInput, setFocusInput] = useState(false);
  
  function handleChange(e){
    setSearchText(e.target.value);
  }

  const onFocus =()=> {
    setFocusInput(true)
  }

  const onBlur =()=> {
    setFocusInput(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    CheckText(searchText);
  }

  return(
    <div className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <input className="searh-form__input" id="searh-form" placeholder="Введите тему новости" onChange={handleChange} onFocus={onFocus} onBlur={onBlur}></input>
        <button className={focusInput ? "searh-form__button searh-form__button_active" : "searh-form__button"} onClick = {onClick}> Искать </button>
      </form>
    </div>
    
  )
}

export default SearchForm;