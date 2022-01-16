import './App.css';
import React, { Component } from 'react';
import NewsList from './NewsList';
import {newsData} from'./news'
import NewsFilters from './NewsFilters';
import FormNews from './FormNews';

export class NewsPage extends Component {
 
  state = {
    items: newsData,
    search: '',
    filterAuthor: '',
    filterHashtag: [],
  };

  createNews = (news) => {
    this.setState({
      items: [news,
        ...this.state.items,
      ]
    })
  }

  deleteNews = (newsId) => {
    this.setState({
      items: this.state.items.filter((news) => news.id !== newsId),
    });
  };

  handleChangeSearch = (newSearch) => {
     this.setState({
        search: newSearch,
      });
      console.log(this.state);
  };

  handleFilterAuthor = (newFilterAuthor) => {
    this.setState({
      filterAuthor: newFilterAuthor,
    });
  };

  handleFilterHashtag = (newFilterHashtag) => {
    this.setState({
      filterHashtag: [
        newFilterHashtag,
        ...this.state.filterHashtag,
      ]
    });
  };

  render() {
    const { items, search, filterAuthor, filterHashtag} = this.state;
    const itemsToRender = items.filter((el) => {
      if ((el.author !== filterAuthor) && (filterAuthor !== '')) return false;
      for(var i = 0, length = filterHashtag.length; i<length; i++) {
        if (-1 === el.hashtag.indexOf(filterHashtag[i])) {
             return false;
      }}
      if ((el.title.toLowerCase().indexOf(search.toLowerCase()) < 0) && 
          (el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)) return false;
      return true;
    });

    return (
        <div className="newsPage">
          <div className="filtersSection">
           <NewsFilters
           search={search}
           filterAuthor={filterAuthor}
           onChangeSearch={this.handleChangeSearch}
           onChangeFilterAuthor={this.handleFilterAuthor}
           onChangeFilterHashtag={this.handleFilterHashtag}
           />
          </div>
          <div className="newsSection">
                <FormNews oncreateNew={this.createNews}/>
                <NewsList items={itemsToRender} ondeleteNews={this.deleteNews}/>
          </div>
        </div>
    )
  }
}

export default NewsPage;

