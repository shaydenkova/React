import React,  { Component } from 'react';
import PropTypes from 'prop-types';


export class StarList extends Component {
    state = {
        search: '',
    };

    onSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchName(this.state); 
        e.target.reset();
        this.setState({
            search: '',
        })
    }

    render () {
        const {status, error, data} = this.props;
        const {value} = this.state;
        return (
            <div>
                 {status === 'loading' || status === 'initial' ? 
                 (<div>Loading...</div>) : 
                 (<div>{error === null ? 
                        (<div>
                            <form onSubmit={this.onSubmit} autoComplete='off'>
                                <input type='text' value={value} onChange = {this.onSearch}/>
                                <button type='submit'>Search Starship Name</button>
                            </form>
                            {(data.count === 0) ? <p>No results</p> :
                                data.results.map(el =>
                                    <div key = {el.name}>
                                        <h2>{el.name}</h2>
                                        <p>Manufacturer: {el.manufacturer}</p>
                                        <p>Created: {el.created.split('T')[0]}</p>
                                        <p>Cost: {el.cost_in_credits}</p>
                                        <p>Max atmosphering speed: {el.max_atmosphering_speed}</p>
                                        <hr/>
                                    </div>
                            )}
                        </div>): 
                        (<span style={{ color: 'red' }}>{error}</span>)
                        }
                 </div>)
                 }
            </div>
            
        )
    }
}

export default StarList;

StarList.propTypes = {
    status: PropTypes.string,
    error: PropTypes.string,
    data: PropTypes.object 
};
  
StarList.defaultProps = {
};
