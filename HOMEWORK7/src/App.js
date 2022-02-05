import React from 'react';
import { Component } from 'react';
import './App.css';
import {newsData} from './news';
import NewsPage from './NewsPage';

export class App extends Component {
  state = {
    items: newsData
  }

  deleteNews = (newsId) => {
    this.setState({
      items: this.state.items.filter((news) => news.id !== newsId),
    });
  };
  
  render() {
    const {items} = this.state;
    return (
      <div className='newsPage'>
        <NewsPage items={items} ondeleteNews={this.deleteNews}/>
      </div>
    );
  } 
}

export default App;
