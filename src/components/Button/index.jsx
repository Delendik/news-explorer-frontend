import React from 'react';
import './index.css';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logout_black.svg';

function Button({loginIn, handleLogout, savedNews, handlePopupLogin, userName}){
  if(loginIn){
    return(
      <button className={savedNews ? "button__container button__container_savedNews"  : "button__container"} onClick={handleLogout}>
        <div className="button__title">{userName}</div> 
        <img src={savedNews ? logoutBlack : logout} alt="выйти" className="button__logout" />
      </button>
    )
  } else{
    return(
      <button className="button__container" onClick={handlePopupLogin}>
        <div className="button__title">Авторизоваться</div> 
      </button>
    )
  }
}

export default Button;