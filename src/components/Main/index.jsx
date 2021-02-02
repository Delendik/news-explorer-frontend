import React from 'react';
import './index.css';
import SearchForm from '../SearchForm';

function Main({CheckText, searchNews}){
  return(
    <div className="main__container">
      <h1 className="main__title">Что творится в мире?</h1>
      <section className="main__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </section>
      <SearchForm CheckText={CheckText} searchNews={searchNews} />
    </div>
  )
}

export default Main;