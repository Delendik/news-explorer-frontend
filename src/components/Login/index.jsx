import React from 'react';
import PopupWithForm from '../PopupWithForm';
import './index.css';

function Login({isOpenLogin, handlePopupRegister, closePopup, onClick}){
  return(
    <div className={isOpenLogin ? "login__container login__container_opened" : "login__container"}>
      <PopupWithForm 
        title={"Вход"} 
        buttonName={"Войти"}
        childrenLink={
          <p className="login__beforeLink">или <button className="login__link" onClick={handlePopupRegister}>Зарегистрироваться</button> </p>
        }
        closePopup={closePopup}
        nameField={true}
        onClick={onClick}
      />
    </div>
  )  
};

export default Login;