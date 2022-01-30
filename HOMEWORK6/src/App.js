import './App.css';
import React,  { Component } from 'react';
import Star from './Star';

export class App extends Component {
      state = {
        starshipsApi: `https://swapi.dev/api/starships/`,
      }
    
  render () {
    const {starshipsApi} = this.state;
    
    return (
      <div className="starList">
       <Star starshipsApi={starshipsApi}/>
      </div>
    )
  };
}

export default App;
