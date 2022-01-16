import { Component } from 'react';
import { getBase64 } from "./Utils";
import PropTypes from 'prop-types';

export class FormNews extends Component {
    state = {
        title: '',
        content: '',
        description: '',
        photo: '',
        hashtag: [],
        author: '',
      };

    handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100) + 1;;
        const news = {
            id,
            ...this.state,
            hashtag: this.state.hashtag,
        };
        this.props.oncreateNew(news);
        e.target.reset();
    };

    setTitle = (e) => {
        const input = e.target.value;
        this.setState({
            title: input,
        })
    };

    setContent = (e) => {
        const input = e.target.value;
        this.setState({
            content: input,
        })
    };

    setDescription = (e) => {
        const input = e.target.value;
        this.setState({
            description: input,
        })
    };

    setAuthor = (e) => {
        const input = e.target.value;
        this.setState({
            author: input,
        })
        console.log(input);
    };

    setHashtag = (e) => {
        const input = e.target.value;
        let newHashtag;
        newHashtag = [...this.state.hashtag, input];
        this.setState({
            hashtag: newHashtag,
        })
    };

    handlePhoto = (e) => {
        const file = e.currentTarget.files[0];
        getBase64(file, (base64) => {
          this.setState({
            photo: base64,
          });
        })
    };

    render() {
        return(
            <div className='form-news'>
                <form onSubmit={this.handleSubmit} className="movie-form__cont" autoComplete='off'>
                    <div className="form-news-row" onChange={this.setTitle}>
                        <label htmlFor="form-news-title">Title: </label>
                        <br/>
                        <input type="text" name="title" id="form-news-title" />
                    </div>
                    <div className="form-news-row">
                        <label htmlFor="form-news-content">Content: </label>
                        <br/>
                        <textarea name="content" id="form-news-content" onChange={this.setContent}/>
                    </div>
                    <div className="form-news-row" >
                        <label htmlFor="form-news-desription">Desription: </label>
                        <br/>
                        <textarea name="desription" id="form-news-desription" onChange={this.setDescription}/>
                    </div>
                    <div className="form-news-row">
                        <label>Photo: </label>
                        <br/>
                        <input type="file" accept=".jpeg,.png" onChange={this.handlePhoto} />
                    </div>
                    <div className="form-news-row">
                        <label>Hashtags: </label>
                            <br/>
                            <input type="checkbox" onChange={this.setHashtag} value="commodo"/>#commodo
                            <input type="checkbox" onChange={this.setHashtag} value="proident"/>#proident
                            <input type="checkbox" onChange={this.setHashtag} value="reprehenderit"/>#reprehenderit
                            <input type="checkbox" onChange={this.setHashtag} value="aliqua"/>#aliqua
                    </div>  
                    <div className="form-news-row">
                        <label>Author: 
                            <br/>
                            <input type="radio" onChange={this.setAuthor} checked={this.state.author==="Harriet Brooks"} value="Harriet Brooks"/>Harriet Brooks
                            <input type="radio" onChange={this.setAuthor} checked={this.state.author==="Vargas Cote"} value="Vargas Cote"/>Vargas Cote
                            <input type="radio" onChange={this.setAuthor} checked={this.state.author==="Willis Cote"} value="Willis Cote"/>Willis Cote
                            <input type="radio" onChange={this.setAuthor} checked={this.state.author==="Willis Simmons"} value="Willis Simmons"/>Willis Simmons
                        </label>
                    </div>
                    <br/>
                    <button type="submit">Create news</button>
                 </form>

            </div>
        )
    }
} 

export default FormNews;

FormNews.propTypes = {
    oncreateNew: PropTypes.func.isRequired,
};

FormNews.defaultProps = {
};



