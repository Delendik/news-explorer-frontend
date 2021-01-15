import React, { useState } from 'react';
import './index.css';
import Navigation from '../Navigation';
import {useLocation} from 'react-router-dom';

function Header({ loginIn, handleLogout, handleSavedNewsPage, savedNews, handleMainPage, handlePopupLogin, isOpenLogin, isOpenRegister, handleClickMenu, openBurger}){
  const location = useLocation();

  if (location.pathname === '/saved-news'){
    return(
      <header 
        className={openBurger ? " header header__savedNews" : "header header__savedNews"}
        style={isOpenLogin||isOpenRegister ? {backgroundColor:"transparent"} : {display:"flex"}}
      >
        <h2 className="header__title">NewsExplorer</h2>
        <Navigation loginIn={loginIn} 
          handleLogout={handleLogout} 
          handleSavedNewsPage={handleSavedNewsPage}
          savedNews={savedNews}
          handleMainPage={handleMainPage}
          handlePopupLogin={handlePopupLogin}
          openBurger={openBurger}
        />
        <div className={openBurger ? "header__burger_active header__burger header__burger_saved" : "header__burger header__burger_saved"} onClick={handleClickMenu} />
      </header>
    )
  } else{
    return(
      <header 
        className={openBurger ? "header header__activeBurger" : "header"}
        style={isOpenLogin||isOpenRegister ? {backgroundColor:"transparent"} : {display:"flex"}}
      >
        <h2 className="header__title">NewsExplorer</h2>
        <Navigation loginIn={loginIn} 
          handleLogout={handleLogout} 
          handleSavedNewsPage={handleSavedNewsPage}
          savedNews={savedNews}
          handleMainPage={handleMainPage}
          handlePopupLogin={handlePopupLogin}
          openBurger={openBurger}
        />
        <div className={openBurger ? "header__burger_active header__burger" : "header__burger"} onClick={handleClickMenu} />
      </header>
    )
  }
  
}

export default Header;