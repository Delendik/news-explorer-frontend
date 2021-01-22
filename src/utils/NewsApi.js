class NewsApi{
  constructor({url, key, headers}){
    this.url = url;
    this.key = key;
    this.headers = headers;
  }

  getCards(text){
    console.log('text: ', text)
    return fetch(`${this.url}q=${text}&from=2021-01-12&to=2021-01-11&pageSize=100&apiKey=${this.key}`, {
      headers: this.headers
    })
    .then(res =>{ 
      return this._getResponseData(res);
    });
  }

  _getResponseData(res){
    console.log('res,', res)
    if(res.ok){
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

const api = new NewsApi({
  url: 'https://nomoreparties.co/news/v2/everything?',
  key: '5774a0ce0b504886884ae989b91d8fe0',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  }
})

export default api;