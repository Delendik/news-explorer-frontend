import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm';
import './index.css';

function Login({isOpenLogin, handlePopupRegister, closePopup, onLogin}){
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [active, setActive] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData({
      ...data, 
      [name]: value,
    });
    setError({
      ...error, 
      [name]: e.target.validationMessage,
    });
    setActive(e.target.closest("form").checkValidity());
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const {email, password} = data;
    onLogin({email, password});
  }

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
        active={active}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        error={error}
      />
    </div>
  )  
};

export default Login;