import { Component } from 'react';
import PropTypes from 'prop-types';


export class NewsFilters extends Component {
   
    state = {
        filter: '',
    }
 

    handleChangeSearch = (e) => {
        let { onChangeSearch } = this.props;
        onChangeSearch(e.currentTarget.value);
    }
    
    handleFilterHashtag = (e) => {
        let { onChangeFilterHashtag } = this.props;
        onChangeFilterHashtag(e.currentTarget.value);
    }

    handleFilterAuthor = (e) => {
        const input = e.currentTarget.value;
        let { onChangeFilterAuthor } = this.props;
        onChangeFilterAuthor(input);
        this.setState({
            filter: input,
        })
    }
    
    render() {
        const {
            search,
        } = this.props; 

        return (
            <div className='filtersSection'>
                <input className='inpt' value={search} onChange={this.handleChangeSearch}/>
                <div className='filtersHashtag'>
                    <input type="checkbox" value="commodo" onClick={this.handleFilterHashtag}/>#commodo
                    <br/>
                    <input type="checkbox" value="proident" onChange={this.handleFilterHashtag}/>#proident
                    <br/>
                    <input type="checkbox" value="reprehenderit" onChange={this.handleFilterHashtag}/>#reprehenderit
                    <br/>
                    <input type="checkbox" value="aliqua" onChange={this.handleFilterHashtag}/>#aliqua
                </div>
                <div className='filtersAuthor'>
                    <input type="radio" checked={this.state.filter ==='Harriet Brooks'} onChange={this.handleFilterAuthor} value="Harriet Brooks"/>Harriet Brooks
                    <br/>
                    <input type="radio" checked={this.state.filter ==='Vargas Cote'} onChange={this.handleFilterAuthor} value="Vargas Cote"/>Vargas Cote
                    <br/>
                    <input type="radio" checked={this.state.filter ==='Willis Cote'} onChange={this.handleFilterAuthor} value="Willis Cote"/>Willis Cote
                    <br/>
                    <input type="radio" checked={this.state.filter ==='Willis Simmons'} onChange={this.handleFilterAuthor} value="Willis Simmons"/>Willis Simmons
                </div>
            </div>
    )}
}
 

export default NewsFilters;

NewsFilters.propTypes = {
    search: PropTypes.string,
    onChangeFilterAuthor: PropTypes.func,
    onChangeFilterHashtag: PropTypes.func,
    onChangeSearch: PropTypes.func
};

NewsFilters.defaultProps = {};