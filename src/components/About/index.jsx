import React from 'react';
import './index.css';
import pic from '../../images/author.jpg';

function About(){
  return(
    <div className="about__container">
      <img src={pic} alt="фото автора" className="about__photo" /> 
      <div className="about__description">
        <h2 className="about__title">О проекте и авторе</h2>
        <p className="about__text">
          Привет! Меня зовут Алексей и я фронтендер.
          <br/><br/>
          На этой странице вы можете найти новости по своему запросу и при желании сохранить.
          <br/><br/>
          Для поиска новостей используется NewsAPI, а для регистрации и входа написанный на NodeJs сервер.
          <br/><br/>
          Если хотите поработать вместе, пишите delendikalexey@gmail.com.
        </p>
      </div>
    </div>
  )
}

export default About;