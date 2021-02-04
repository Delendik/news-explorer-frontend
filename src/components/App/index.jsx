import {React, useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
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
import apiNews from '../../utils/NewsApi';
import * as MainApi from '../../utils/MainApi';
import { getToken, removeToken } from '../../utils/token';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { getLocalCards, setLocalCards } from '../../utils/cards';

function App() {
  const [loginIn, setLoginIn] = useState(false);
  const [savedNews, setSavedNews] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const [successError, setSuccessError] = useState(false);
  let cardsAfterRestart = getLocalCards() ? getLocalCards() : [];
  const [cards, setCards] =  useState(cardsAfterRestart);
  const [displayCard, setDisplayCard] = useState(cardsAfterRestart.length>1 ? true : false);
  const [loadind, setLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [keyword, setKeyword] = useState('');

  const history = useHistory();

  const checkToken = () =>{
    const token = getToken();
    if(!token){
      return;
    }
    return token;
  }

  const token = checkToken();

  useEffect(() =>{
    checkToken();
  }, []);

  useEffect(() =>{
    MainApi.getUserInfo(token)
    .then((res) =>{
      if(res){
        setLoginIn(true);
        setCurrentUser(res);
        history.push('/');
      }
    })
    .catch(err => {
      if(err.status===401){
        console.log("Токен не передан или передан не в том формате");
      } else {
        console.log("ошибка на сервере");
      }
    });

    MainApi.getCards(token)
    .then((res) =>{
      if(res){
        setSavedCards(res);
      }
    })
    .catch(err => {
      if(err.status===401){
        console.log("Токен не передан или передан не в том формате");
      } else {
        console.log("ошибка на сервере");
      }
    });
  }, [loginIn])
  
  const onRegister = ({email, password, name}) =>{
    setLoading(true);
    MainApi.register({email, password, name})
    .then((res) => {
      if(res){
        setIsOpenRegister(false);
        setSuccessRegister(true);
        history.push('/');
      } else {
        setIsOpenRegister(true);
        history.push('/');
      }
    })
    .catch(err => {
      setIsOpenRegister(true);
      if(err.status===400){
        console.log("Некорректно заполнено одно из полей");
      } else {
        console.log("Ошибка на сервере");
      }
    })
    .finally(
      setLoading(false)
    )
  }

  const onLogin = ({email, password}) =>{
    setLoading(true);
    MainApi.authorize({email, password})
    .then((res) => {
    setLoginIn(true);
    setIsOpenLogin(false);
    checkToken();
    setSuccessRegister(false);
    })
    .catch((err) => { 
      console.log(err); 
    })
    .finally(
      setLoading(false)
    )
  }

  var today = new Date();
  let yearToday = today.getFullYear()
  let monthToday = (today.getMonth()+1)
  let dayToday = today.getDate()
  var to = (yearToday+'-'+monthToday+'-'+dayToday)
  var beforedate = new Date();
  beforedate.setDate(beforedate.getDate() - 7);
  let yearBefore = beforedate.getFullYear()
  let monthBefore = (beforedate.getMonth()+1)
  let dayBefore = beforedate.getDate()
  var from = (yearBefore+'-'+monthBefore+'-'+dayBefore)

  const CheckText = (searchText) =>{
    if(!searchText.length){
      setSuccessError(true);
    }
  }

  useEffect(() => {
    window.onbeforeunload = () => {
      setLocalCards(cards);
    }
  })

  const searchNews = async (searchText) =>{
    setLoading(true);
    try {
      const items = await apiNews.getCards(searchText, from, to)
      const uniqueItems = [...new Map(items.map(item => [item['id'], item])).values()]
      setCards(uniqueItems);
      setDisplayCard(true);
      setKeyword(searchText);
    } catch (error) {
      console.log(error); 
    }finally {setLoading(false)}
  }  

  const handleClickMenu = () =>{
    setOpenBurger(!openBurger);
  }

  const handleLogin = () =>{
    setLoginIn(true);
    setIsOpenLogin(false);
    setSuccessRegister(false);
  }


  const handleLogout = () =>{
    setLoginIn(false);
    setSavedNews(false);
    removeToken();
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

  const handleAddCard = (card) => {
    MainApi.addCard(token, card)
    .then((saveCard) => {
      setSavedCards([...savedCards, saveCard])
    })
  };

  const handleDeleteCard = (_id) => {
    MainApi.removeCard(token, _id)
    .then(() => {
      const newCards = savedCards.filter((c) => c._id !== _id );
      setSavedCards(newCards);
    })
    .catch((err) => { 
      console.log(err);  
    }); 
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" >
        <div  className="page__container">
          <Preloader loadind={loadind} />
          
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
            onLogin={onLogin}
          />
      
          <Register 
            isOpenRegister={isOpenRegister}
            handlePopupLogin={handlePopupLogin}
            closePopup={closePopup}
            onClick={handleSuccessRegister}
            onRegister={onRegister}
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
                userName={currentUser.name}
              />
              <Main CheckText={CheckText} searchNews={searchNews} />
              <NewsCardList displayCard = {displayCard} loginIn={loginIn} cards={cards} token={token} keyword={keyword} savedCards={savedCards} handleAddCard={handleAddCard} handleDeleteCard={handleDeleteCard} handlePopupLogin={handlePopupLogin} />
              <About />
            </div>
          </Route>

          <ProtectedRoute path="/saved-news" loginIn={loginIn} handlePopupLogin={handlePopupLogin} >
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
                userName={currentUser.name}
              />
              <SavedNewsHeader number={savedCards.length} userName={currentUser.name} savedCards={savedCards} />
              <NewsCardList displayCard = {displayCard} loginIn={loginIn} cards={cards} token={token} savedNews={savedNews} savedCards={savedCards} handleDeleteCard={handleDeleteCard} />
          </ProtectedRoute>

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
    
  )
}

export default App;
