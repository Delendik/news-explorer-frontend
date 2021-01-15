import React from 'react';
import './index.css';

function PopupSuccesRegister({closePopup, handlePopupLogin, successRegister}){
  return(
    <div className={successRegister ? "popupRegister popupRegister_opened" : "popupRegister"} >
      <div className="popupRegister__overlay" onClick={closePopup} />
      <div className="popupRegister__container">
        <h3 className="popupRegister__title">Пользователь успешно зарегистрирован!</h3>
        <button className="popupRegister__link" onClick={handlePopupLogin}>Войти</button>
        <button className="popupRegister__close" onClick={closePopup} />
      </div>
    </div>
  )  
};

export default PopupSuccesRegister;