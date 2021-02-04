class NewsApi{
  constructor({url, key, headers}){
    this.url = url;
    this.key = key;
    this.headers = headers;
  }

  getCards(text, from, to){
    return fetch(`${this.url}q=${text}&from=${from}&to=${to}&pageSize=100&sortBy=publishedAt&apiKey=${this.key}`, {
      headers: this.headers
    })
    .then(res =>{ 
      return this._getResponseData(res);
    })
    .then((cards) => {
      const items = cards.articles.map(item => ({
        id: `${item.title}-${item.source.name}`,
        keyword: text,
        title: item.title, 
        text:item.description,
        date:item.publishedAt, 
        source:item.source.name, 
        link:item.url, 
        image:item.urlToImage
      }))
      return items;
    })
  }

  _getResponseData(res){
    if(res.ok){
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

const apiNews = new NewsApi({
  url: 'https://nomoreparties.co/news/v2/everything?',
  key: '5774a0ce0b504886884ae989b91d8fe0',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default apiNews;