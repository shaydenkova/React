import React,  { Component } from 'react';
import StarList from './StarList';
import PropTypes from 'prop-types';


export class Star extends Component {
    constructor(props){  
     super(props);
        this.state = {
            data: null,
            error: null,
            status: 'initial',
        }
    }

  onSearchName = (e) => {
    const {starshipsApi} = this.props;
    const {search} = e;
    (search === '') ?
    this.fetchData(starshipsApi) :
    this.fetchData(`https://swapi.dev/api/starships/?search=${search}`);
  }

  fetchData = (i) => {
    fetch(i)
    .then((res) =>{
      return res.json();
    })
    .then((data) =>{
      this.setState({
        status: 'success',
        error: null,
        data
      })
    })
    .catch((error) => {
      this.setState({
        status: 'error',        
        error: error.message,
        data: null,
      })
    })
  }
  
  render () {
    const {data, status, error} = this.state;
    return (
      <div className="App">
          <StarList status={status} error={error} data={data} onSearchName={this.onSearchName}/>
      </div>
    )
  };

  componentDidMount() {
    const {starshipsApi} = this.props;
    this.fetchData(starshipsApi);
  }

}


export default Star;


Star.propTypes = {
    starshipsApi: PropTypes.string
};
  
Star.defaultProps = {
};
