import React from 'react';
import './index.css';

function PopupError({text, closePopup, successError}){
  return(
    <div className={successError ? "popupError popupError_opened" : "popupError"} >
      <div className="popupError__overlay" onClick={closePopup} />
      <div className="popupError__container">
        <h3 className="popupError__title">{text}</h3>
        <button className="popupError__close" onClick={closePopup} />
      </div>
    </div>
  )  
};

export default PopupError;