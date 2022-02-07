import './App.css';
import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import {newsData} from'./news'
import NewsFilters from './NewsFilters';
import FormNews from './FormNews';



export const NewsPage = () => {
  const [items, setItems] = useState(newsData);
  const [search, setSearch] = useState('');
  const [filterAuthor, setFlterAuthor] = useState('');
  const [filterHashtag, setFilterHashtag] = useState([]);

  const createNews = (news) => {setItems([news, ...items])};

  const deleteNews = (newsId) => {
    setItems(items.filter((news) => news.id !== newsId));
  };

  useEffect (() => {
    let itemArray = items.filter((el) => {
        if ((el.author !== filterAuthor) && (filterAuthor !== '')) return false;
        for(var i = 0, length = filterHashtag.length; i<length; i++) {
          if (-1 === el.hashtag.indexOf(filterHashtag[i])) {
              return false;
        }}
        if ((el.title.toLowerCase().indexOf(search.toLowerCase()) < 0) && 
            (el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)) return false;
        return true;
      });
    setItems(itemArray);
  }, [search,filterAuthor,filterHashtag]);

  return (
    <div className="newsPage">
      <div className="filtersSection">
      <NewsFilters
        search={search}
        filterAuthor={filterAuthor}
        onChangeSearch={setSearch}
        onChangeFilterAuthor={setFlterAuthor}
        onChangeFilterHashtag={setFilterHashtag}
      />
      </div>
      <div className="newsSection">
            <FormNews oncreateNews={createNews}/>
            <NewsList items={items} 
            ondeleteNews={deleteNews}
            />
      </div>
   </div>
  )
}

export default NewsPage;

