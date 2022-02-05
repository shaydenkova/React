import React from 'react';
import { Component } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

export class NewsPage extends Component {
    cardNews =  [];
    photoNews =  [];

    componentDidMount() {
        let cardNews = this.cardNews;
        let photoNews = this.photoNews;
        let cardTransition;
        let timeline = gsap.timeline();

        cardNews.forEach( el => {
            cardTransition = gsap.fromTo(el, {
                opacity: 0,
                x: 400
                }, {
                opacity: 1,
                x: 0,
                ease: 'easeInOut',
                duration: 2,
                }
                );
              timeline.add(cardTransition);
        })

        photoNews.forEach(el => {
            el.addEventListener('click', function() {
                gsap.fromTo(el, {
                    duration: 50, 
                    opacity: 1,
                }, {
                    opacity: 0,
                    duration: 3,
                    ease: 'easeInOut'
                });
            });
        })

    }

    setCardNews = el => {
        this.cardNews = [...this.cardNews, el];
    }

    setPhotoNews = el => {
        this.photoNews = [...this.photoNews, el];
    }
 
    render() {
        const { items, ondeleteNews } = this.props;
        return (
            <div className="newsSection">
                {items.map(el => (
                    <div ref={this.setCardNews}  key={el.id}>
                        <div>{el.title}</div>
                        <div >{el.content}</div>
                        <div >{el.description}</div>
                        <img ref={this.setPhotoNews}src={el.photo}></img>
                        <div >{el.author}</div>
                        <button  onClick={() => ondeleteNews(el.id)}>Delete</button>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

export default NewsPage;

NewsPage.propTypes = {
    items: PropTypes.array,
    ondeleteNews: PropTypes.func,
};

NewsPage.defaultProps = {};