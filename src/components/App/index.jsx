import {React, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Header from '../Header';
import Main from '../Main';
import About from '../About';
import Footer from '../Footer';
import NewsCardList from '../NewsCardList';
import ProtectedRoute from '../ProtectedRoute';
import SavedNewsHeader from '../SavedNewsHeader';
import Login from '../Login';
import Register from '../Register';
import PopupSuccesRegister from '../PopupSuccesRegister';
import PopupError from '../PopupError';
import Preloader from '../Preloader';
import api from '../../utils/NewsApi';

function App() {
  const [loginIn, setLoginIn] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);
  const [savedNews, setSavedNews] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [successError, setSuccessError] = useState(false);
  const [text, setText] = useState('');
  const [cards, setCards] =  useState([]);

  var today = new Date();
  let formatter = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  console.log(formatter.format(today))
  // useEffect(()=>{
  //   Promise.all([ 
  //     api.getCards(text) 
  //   ]) 
  //   .then( 
  //     json=>{ 
  //       console.log('json', json.0.articles)
  //       const [data] = json; 
  //       const items = data.map(item => ({ 
  //         link: item.link,
  //         likes: item.likes,
  //         name: item.name,
  //         _id:item._id,
  //         owner:item.owner
  //         })) 
  //         setCards(items) 
  //       }
  //   )
  //   .catch((err) => { 
  //     console.log(err);  
  //   }); 
  // }, [text])

  const CheckText = (searchText) =>{
    setText(searchText)
    console.log('searchText', searchText)
    if(!searchText.length){
      setSuccessError(true);
    }
  }

  const handleClick = () =>{
    setCards([])
    console.log('text', text)
    api.getCards(text).then((cards) => {
      console.log('cards:', cards.articles);
      const items = cards.articles.map(item => ({
        title: item.title, 
        text:item.description,
        date:item.publishedAt, 
        source:item.source.name, 
        link:item.url, 
        image:item.urlToImage
      }))
      setCards(items)
      setDisplayCard(true);
    })
  }  

  const handleClickMenu = () =>{
    setOpenBurger(!openBurger);
  }

  // const handleClick = () =>{
  //   setDisplayCard(true);
  // };

  const handleLogin = () =>{
    setLoginIn(true);
    setIsOpenLogin(false);
    setSuccessRegister(false);
  }


  const handleLogout = () =>{
    setLoginIn(false);
    setSavedNews(false);
  }

  const handleSavedNewsPage = () =>{
    setSavedNews(true);
    setOpenBurger(false);
  }

  const handleMainPage = () =>{
    setSavedNews(false);
  }

  const handlePopupLogin = () =>{
    setIsOpenLogin(true);
    setIsOpenRegister(false);
    setSuccessRegister(false);
  }

  const handlePopupRegister = () =>{
    setIsOpenRegister(true);
    setIsOpenLogin(false);
  }

  const closePopup = () =>{
    setIsOpenLogin(false);
    setIsOpenRegister(false);
    setSuccessRegister(false);
    setSuccessError(false);
  }

  const handleSuccessRegister = () =>{
    setSuccessRegister(true);
    setIsOpenRegister(false);
  }

  useEffect(() => {
    const handleEsc = (e) => {
      const ESC_CODE = 'Escape' ;
      if (e.code === ESC_CODE) {
        closePopup();
      }
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [])

  return (
    <div className="page" >
      <div  className="page__container">
        <Preloader />
        
        <PopupError
          text="Нужно ввести ключевое слово" 
          closePopup={closePopup}
          successError={successError}
        />

        <Login 
          isOpenLogin={isOpenLogin}
          handlePopupRegister={handlePopupRegister}
          closePopup={closePopup}
          onClick={handleLogin}
        />
    
        <Register 
          isOpenRegister={isOpenRegister}
          handlePopupLogin={handlePopupLogin}
          closePopup={closePopup}
          onClick={handleSuccessRegister}
        />

        <PopupSuccesRegister 
          closePopup={closePopup}
          successRegister={successRegister}
          handlePopupLogin={handlePopupLogin}
        />

        <Route exact path="/">
          <div  className="page__background_main">
            <Header 
              loginIn={loginIn} 
              handleLogout={handleLogout} 
              savedNews={savedNews} 
              handleSavedNewsPage={handleSavedNewsPage}
              handlePopupLogin={handlePopupLogin}
              handleMainPage={handleMainPage}
              isOpenLogin={isOpenLogin}
              isOpenRegister={isOpenRegister}
              handleClickMenu={handleClickMenu}
              openBurger={openBurger}
            />
            <Main onClick = {handleClick} CheckText={CheckText} />
            <NewsCardList displayCard = {displayCard} loginIn={loginIn} cards={cards} />
            <About />
          </div>
        </Route>

        <ProtectedRoute path="/saved-news" loginIn={loginIn} >
            <Header 
              loginIn={loginIn} 
              savedNews={savedNews}
              handleLogout={handleLogout} 
              handleSavedNewsPage={handleSavedNewsPage}
              handleMainPage={handleMainPage}
              isOpenLogin={isOpenLogin}
              isOpenRegister={isOpenRegister}
              handleClickMenu={handleClickMenu}
              openBurger={openBurger}
            />
            <SavedNewsHeader number={5} />
            <NewsCardList displayCard = {displayCard} loginIn={loginIn} savedNews={savedNews} />
        </ProtectedRoute>

        <Footer />
      </div>
    </div>
  )
}

export default App;
