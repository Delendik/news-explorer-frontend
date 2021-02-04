import React from 'react';
import './index.css';
import logoFacebook from '../../images/logo_facebook.svg';
import logoGit from '../../images/logo_git.svg'

function Footer(){
  return(
    <div className="footer__container">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__links">
        <div className="footer__mainLinks">
          <a className="footer__link" href="#">Главная</a>
          <a className="footer__link" href="https://praktikum.yandex.ru/"  target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        </div>
        <div className="footer__logos">
          <a className="footer__logoLink_first" href="https://github.com/Delendik/" target="_blank" rel="noreferrer">
            <img src={logoGit} className="footer__logo" alt="логотип Гита" />
          </a>
          <a className="footer__logoLink_last" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={logoFacebook} className="footer__logo" alt="логотип Фейсбука" /> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;