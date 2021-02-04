import React, { useState }  from 'react';
import PopupWithForm from '../PopupWithForm';
import './index.css';

function Register({handlePopupLogin, isOpenRegister, closePopup, onRegister}){
  const [data, setData] = useState({
    email: '',
    password: '',
    name:'',
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
    return (setData, setError, setActive);
  }

  const updateForm = () =>{
    const {email, password, name} = data;
    email.value =  ''
    password.value =  ''
    name.value =  ''
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {email, password, name} = data;
    onRegister({email, password, name, updateForm});
  }  

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
              type="text" 
              placeholder="Введите своё имя"
              className="popup__input" 
              id="name-input" 
              name="name"
              required 
              minLength="2" 
              maxLength="30" 
              onChange={handleChange} 
            />
            <span className="popup__input_error" id="name-input-error">{error.name}</span>
          </div>
        }
        active={active}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        error={error}
      />
    </div>
  )  
};

export default Register;