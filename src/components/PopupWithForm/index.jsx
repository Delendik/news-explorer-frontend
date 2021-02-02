import React, { useState, useEffect } from 'react';
import './index.css';
import SubmitButton from '../SubmitButton';

function PopupWithForm({title, buttonName, childrenLink, closePopup, children, nameField, active, error, handleSubmit, handleChange}){
  // const {name, password} = error
  // const [email, setEmail] = useState('');

  // const handleChangePassowrd = (e) =>{
  //   setPassowrd(e.target.value)
  // }

  // const handleChangeEmail = (e) =>{
  //   setEmail(e.target.value)
  // }

  // useEffect(() => {
  //   if((email.length>2) && (password.length>2) && nameField){
  //     setActive(true);
  //   } else{
  //     setActive(false);
  //   }
  // }, [email, password, nameField]);

  return(
    <div className="popup" >
      <div className="popup__overlay" onClick={closePopup} />
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" onSubmit={handleSubmit}>
          <p className="popup__label">Email</p>
          <input 
            type="email" 
            placeholder="Введите почту"
            className="popup__input" 
            id="email-input" 
            name="email"
            required 
            minLength="2" 
            maxLength="30" 
            autoComplete="off"
            onChange={handleChange} 
          />
          <span className="popup__input_error" id="email-input-error">{error.email}</span>
          <p className="popup__label">Пароль</p>
          <input 
            type="password" 
            placeholder="Введите пароль"
            className="popup__input" 
            id="password-input" 
            name="password"
            required 
            minLength="2" 
            maxLength="30" 
            autoComplete="off"
            onChange={handleChange} 
          />
          <span className="popup__input_error" id="password-input-error">{error.password}</span>
          {children}
          <SubmitButton name={buttonName} width="358px"  active={active} />
        </form>
        {childrenLink}
        <button className="popup__close" onClick={closePopup} />
      </div>
    </div>
  )  
};

export default PopupWithForm;