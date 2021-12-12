import { Component } from 'react';
import PropTypes from 'prop-types';

export class NewsList extends Component {
    render() {
        return (
            this.props.newsToRender.map(el => 
            <div className='page' key={el.id}>
                <h1>{el.title}</h1>
                <div dangerouslySetInnerHTML={{__html:el.content}}></div>
                <div>{el.dateCreated}</div>
                {el.photo && <img src={el.photo} alt=''/>}
                {el.link && <a href={el.link}>{el.link}</a>}
                <p>{el.author}</p>
                <hr />              
            </div>
            )
        )     
    }
}


export default NewsList;

NewsList.propTypes = {
    newsToRender: PropTypes.array
};

NewsList.defaultProps = {
    newsToRender: []
};