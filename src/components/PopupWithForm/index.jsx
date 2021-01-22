import React, { useState, useEffect } from 'react';
import './index.css';
import SubmitButton from '../SubmitButton';

function PopupWithForm({title, buttonName, onClick, childrenLink, closePopup, children, nameField}){
  const [password, setPassowrd] = useState('');
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(false)

  const handleChangePassowrd = (e) =>{
    setPassowrd(e.target.value)
  }

  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)
  }

  useEffect(() => {
    if(email && password && nameField){
      setActive(true);
    } else{
      setActive(false);
    }
  }, [email, password, nameField]);

  return(
    <div className="popup" >
      <div className="popup__overlay" onClick={closePopup} />
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form">
          <p className="popup__label">Email</p>
          <input 
            type="email" 
            placeholder="Введите почту"
            value={email} 
            className="popup__input" 
            id="email-input" 
            required 
            minLength="2" 
            maxLength="30" 
            autoComplete="off"
            onChange={handleChangeEmail} 
          />
          <span className="popup__input_error" id="email-input-error"></span>
          <p className="popup__label">Пароль</p>
          <input 
            type="password" 
            placeholder="Введите пароль"
            value={password} 
            className="popup__input" 
            id="password-input" 
            required 
            minLength="2" 
            maxLength="30" 
            autoComplete="off"
            onChange={handleChangePassowrd} 
          />
          {children}
        </form>
        <SubmitButton name={buttonName} width="358px" onClick = {onClick} active={active} />
        {childrenLink}
        <button className="popup__close" onClick={closePopup} />
      </div>
    </div>
  )  
};

export default PopupWithForm;