import React from 'react';
import './index.css';
import pic from '../../images/author.jpg';

function About(){
  return(
    <div className="about__container">
      <img src={pic} alt="фото автора" className="about__photo" /> 
      <div className="about__description">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          <br/><br/>
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  )
}

export default About;