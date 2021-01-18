import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Menu({loginIn, handleSavedNewsPage, savedNews, handleMainPage}){

  if(!loginIn){
    return(
      <div className="menu__title menu__title_active">
        Главная
      </div>
    )
  } else{
    return(
      <div className="menu__container">
        <NavLink 
          exact to='/' 
          className={savedNews ? "menu__title menu__title_savedNews" : "menu__title"} 
          activeClassName="menu__title_active"
          onClick={handleMainPage}
        >
          Главная
        </NavLink> 
        <NavLink 
          to='/saved-news' 
          className={savedNews ? "menu__title menu__title_savedNews" : "menu__title"}  
          activeClassName={savedNews ? "menu__title_active_savedNews" : "menu__title_active"} 
          onClick={handleSavedNewsPage}
        >
          Сохранённые статьи
        </NavLink>
      </div>
    )
  }
  
}

export default Menu;