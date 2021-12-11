import { Component } from 'react';
import PropTypes from 'prop-types';


export class NewsFilters extends Component {
    render() {
        const {
            isPhoto,
            isLink,
            isSpecial,
            handlerPhoto,
            handlerLink,
            handlerSpecial
        } = this.props;   

        return (
            <div className='filtersSection'>
                <button className='btn' onClick = {() =>handlerPhoto(!isPhoto)} checked = {isPhoto}> {!isPhoto ? 'filter by Photo' : 'no filter by photo'} </button>
                <button className='btn' onClick = {() =>handlerLink(!isLink)} checked = {isLink}>{!isLink ? 'filter by Link' : 'no filter by link'}</button>
                <button className='btn' onClick = {() =>handlerSpecial(!isSpecial)} checked = {isSpecial}>{!isSpecial ? 'filter by Special' : 'no filter by special'}</button>
            </div>
    )}
}
  
export default NewsFilters;

NewsFilters.propTypes = {
    isPhoto: PropTypes.bool,
    isLink: PropTypes.bool,
    isSpecial: PropTypes.bool,
    handlerPhoto: PropTypes.func,
    handlerLink: PropTypes.func,
    handlerSpecial: PropTypes.func
};

NewsFilters.defaultProps = {};