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
import Preloader from '../Preloader';

function App() {
  const [loginIn, setLoginIn] = useState(false);
  const [displayCard, setDisplayCard] = useState(false);
  const [savedNews, setSavedNews] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  
  const handleClickMenu = () =>{
    setOpenBurger(!openBurger);
  }

  const handleClick = () =>{
    setDisplayCard(true);
  };

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
            <Main onClick = {handleClick}/>
            <NewsCardList displayCard = {displayCard} loginIn={loginIn}  />
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
