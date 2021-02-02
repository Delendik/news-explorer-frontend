import { setToken } from './token';

export const BASE_URL = 'http://api.delendiknews.students.nomoredomains.icu';

export const register = ({email, password, name}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
  .then((response) => {
    if(!response.ok){
      return Promise.reject({
        status:response.status,
      })
    }
    return response.json();
  })
  .then((res) => {
    return res;
  })
};

export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => {
    if(!response.ok){
      return Promise.reject({
        status:response.status,
      })
    }
    return response.json();
  }))
  .then((data) => {
    if (data.token){
      setToken(data.token);
      return data;
    } else {
      return;
    }
  })
};

export const getUserInfo = (token) =>{
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response => {
    if(!response.ok){
      return Promise.reject({
        status:response.status,
      })
    }
    return response.json();
  }));
};

export const addCard = (token, card) =>{
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(card)
  })
  .then((response => {
    if(!response.ok){
      return Promise.reject({
        status:response.status,
      })
    }
    return response.json();
  }));
};

export const getCards = (token) =>{
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response => {
    if(!response.ok){
      return Promise.reject({
        status:response.status,
      })
    }
    return response.json();
  }));
};

export const removeCard = (token, id) =>{
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response => {
    if(!response.ok){
      return Promise.reject({
        status:response.status,
      })
    }
    return response.json();
  }));
};