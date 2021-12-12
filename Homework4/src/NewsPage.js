import './App.css';
import React, { Component } from 'react';
import {newsData} from './news';
import NewsList from './NewsList';
import NewsFilters from './NewsFilters';

export class NewsPage extends Component {
  state = {
    isPhoto: false,
    isLink: false,
    isSpecial: false,
    search: '',
  };

  handlerPhoto = (newsWithPhoto) => {
    this.setState({
      isPhoto: newsWithPhoto,
    });
  }

  handlerLink = (newsWithLink) => {
    this.setState({
      isLink: newsWithLink,
    });
  }

  handlerSpecial = (newsWithSpecial) => {
    this.setState({
      isSpecial: newsWithSpecial,
    });
  }
  handleChangeSearch = (newSearch) => {
     this.setState({
        search: newSearch,
      });
    console.log(this.state);
    }

  render() {
    const {isPhoto, isLink, isSpecial, search} = this.state;
    const newsToRender = newsData.filter((el) => {
      if ((isPhoto === true) && (el.photo === null)) return false;
      if ((isLink  === true) && (el.link === null)) return false;
      if ((isSpecial === true) && (el.isSpecial === false)) return false;
      if ((el.title.toLowerCase().indexOf(search.toLowerCase()) < 0) && 
          (el.content.toLowerCase().indexOf(search.toLowerCase()) < 0) &&   
          (el.author.toLowerCase().indexOf(search.toLowerCase()) < 0))
        return false;
      return true;
    });

    return (
        <div className="newsPage">
           <div className="filtersSection">
                <NewsFilters 
                isPhoto={isPhoto}
                isLink={isLink}
                isSpecial={isSpecial}
                search = {search}
                handlerPhoto = {this.handlerPhoto} 
                handlerLink = {this.handlerLink} 
                handlerSpecial = {this.handlerSpecial}
                onChangeSearch={this.handleChangeSearch}
                />
            </div>
            <div className="newsSection">
              <NewsList newsToRender = {newsToRender}/>
            </div>
        </div>
        
    )}
}

export default NewsPage;

