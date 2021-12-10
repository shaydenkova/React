import './App.css';
import { Component } from 'react';
import {newsData} from './news';
import NewsList from './NewsList';
import NewsFilters from './NewsFilters';

export class NewsPage extends Component {
  state = {
    isPhoto: false,
    isLink: false,
    isSpecial: false,
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

  render() {
    const {isPhoto, isLink, isSpecial} = this.state;
    const newsToRender = newsData.filter((el) => {
      if ((isPhoto === true) && (el.photo === null)) return false;
      if ((isLink  === true) && (el.link === null)) return false;
      if ((isSpecial === true) && (el.isSpecial === false)) return false;
      return true;
    });

    return (
        <div className="newsPage">
           <div className="filtersSection">
                <NewsFilters 
                isPhoto={isPhoto}
                isLink={isLink}
                isSpecial={isSpecial}
                handlerPhoto = {this.handlerPhoto} 
                handlerLink = {this.handlerLink} 
                handlerSpecial = {this.handlerSpecial}/>
            </div>
            <div className="newsSection">
              <NewsList newsToRender = {newsToRender}/>
            </div>
        </div>
        
    )}
}

export default NewsPage;

