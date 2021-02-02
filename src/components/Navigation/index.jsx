import React from 'react';
import './index.css';
import Button from '../Button';
import Menu from '../Menu';
import {useLocation} from 'react-router-dom';

function Navigation({loginIn, handleLogout, handleSavedNewsPage, savedNews, handleMainPage, handlePopupLogin, openBurger, userName}){
  const location = useLocation();

  if (location.pathname === '/saved-news'){
    return(
      <nav className={openBurger ? "navigation__burger navigation__burger_saved" : "navigation"}>
          <Menu 
            loginIn={loginIn} 
            handleSavedNewsPage={handleSavedNewsPage} 
            savedNews={savedNews} 
            handleMainPage={handleMainPage} 
          />
          <Button 
            loginIn={loginIn} 
            handleLogout={handleLogout} 
            savedNews={savedNews} 
            handlePopupLogin={handlePopupLogin}
            userName={userName}
          />
      </nav>
    )
  } else {
    return(
      <nav className={openBurger ? "navigation__burger" : "navigation"}>
          <Menu 
            loginIn={loginIn} 
            handleSavedNewsPage={handleSavedNewsPage} 
            savedNews={savedNews} 
            handleMainPage={handleMainPage} 
          />
          <Button 
            loginIn={loginIn} 
            handleLogout={handleLogout} 
            savedNews={savedNews} 
            handlePopupLogin={handlePopupLogin}
            userName={userName}
          />
      </nav>
    )
  }
}

export default Navigation;