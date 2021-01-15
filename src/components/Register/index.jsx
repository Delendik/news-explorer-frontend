import React, { useState, useEffect }  from 'react';
import PopupWithForm from '../PopupWithForm';
import './index.css';

function Register({handlePopupLogin, isOpenRegister, closePopup, onClick}){
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState(false);

  const handleChangeName = (e) =>{
    setName(e.target.value)
  }

  useEffect(() => {
    if(name){
      setNameField(true);
    }else{
      setNameField(false);
    }
  }, [name]);

  return(
    <div className={isOpenRegister ? "register__container register__container_opened" : "register__container"}>
      <PopupWithForm 
        title={"Регистрация"} 
        buttonName={"Зарегистрироваться"}
        childrenLink={
          <p className="register__beforeLink">или <button className="register__link" onClick={handlePopupLogin}>Войти</button> </p>
        }
        closePopup={closePopup}
        children ={
          <div>
            <p className="popup__label">Имя</p>
            <input 
              type="email" 
              placeholder="Введите своё имя"
              value={name} 
              className="popup__input" 
              id="name-input" 
              required 
              minLength="2" 
              maxLength="30" 
              onChange={handleChangeName} 
            />
            <span className="popup__input_error" id="email-input-error"></span>
          </div>
        }
        nameField={nameField}
        onClick={onClick}
      />
    </div>
  )  
};

export default Register;