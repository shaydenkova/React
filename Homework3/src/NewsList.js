import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class NewsList extends Component {
    render() {
        return (
            <Fragment> 
                {this.props.newsToRender.map(el => 
                <div key={el.id}>
                    <h1>{el.title}</h1>
                    <div dangerouslySetInnerHTML={{__html:el.content}}></div>
                    <div>{el.dateCreated}</div>
                    {el.photo && <img src={el.photo} alt=''/>}
                    {el.link && <a href={el.link}>{el.link}</a>}
                    <p>{el.author}</p>
                    <hr />              
                </div>
                )}
            </Fragment>
        )     
    }
}


export default NewsList;

NewsList.propTypes = {};

NewsList.defaultProps = {};