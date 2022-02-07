import React, { useState, useRef, useMemo } from 'react';
import { getBase64 } from "./Utils";
import PropTypes from 'prop-types';

export const FormNews = (props) => {

    const refTitle = useRef(null);
    const refContent = useRef(null);
    const refDescription = useRef(null);
    const refAuthor = useRef(null);
    const refPhoto = useRef(null);
    
    // const [photo, setPhoto] = useState('');
    const [hashtag, setHashtag] = useState([]);

    // const handlePhoto = (e) => {
    //     const file = e.currentTarget.files[0];
    //     getBase64(file, (base64) => {
    //         setPhoto(base64);
    //     })
    // };

    const handleHashtag = (e) => {
        const input = e.target.value;
        let newHashtag;
        newHashtag = [...hashtag, input];
        setHashtag(newHashtag);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100) + 1;
        const title = refTitle.current.value;
        const content = refContent.current.value;
        const description = refDescription.current.value;
        const author = refAuthor.current.value;
        
        const file = refPhoto.current.files[0];
        const photo = getBase64(file, (base64) => base64);
  
        // const hashtag = refTitle.current.value;
        const news = {id, title, content, description, photo, hashtag, author};
        props.oncreateNews(news);
        debugger;
        e.target.reset();
    };

    return(
        <div className='form-news'>
            <form 
            onSubmit={handleSubmit} 
            className="movie-form__cont" autoComplete='off'>
                <div className="form-news-row">
                    <label htmlFor="form-news-title">Title: </label>
                    <br/>
                    <input ref={refTitle} type="text" name="title" id="form-news-title" />
                </div>
                <div className="form-news-row">
                    <label htmlFor="form-news-content">Content: </label>
                    <br/>
                    <textarea ref={refContent} name="content" id="form-news-content"/>
                </div>
                <div className="form-news-row" >
                    <label htmlFor="form-news-desription">Desription: </label>
                    <br/>
                    <textarea ref={refDescription} name="description" id="form-news-desription" />
                </div>
                <div className="form-news-row">
                    <label>Photo: </label>
                    <br/>
                    <input type="file" accept=".jpeg,.png" ref={refPhoto} />
                </div>
                <div className="form-news-row">
                    <label>Hashtags: </label>
                        <br/>
                        <input type="checkbox" onChange={handleHashtag} value="commodo"/>#commodo
                        <input type="checkbox" onChange={handleHashtag} value="proident"/>#proident
                        <input type="checkbox" onChange={handleHashtag} value="reprehenderit"/>#reprehenderit
                        <input type="checkbox" onChange={handleHashtag} value="aliqua"/>#aliqua
                </div>  
                <div className="form-news-row">
                    <label>Author: 
                        <br/>
                        <input type="radio" ref={refAuthor} name='author' value="Harriet Brooks"/>Harriet Brooks
                        <input type="radio" ref={refAuthor} name='author' value="Vargas Cote"/>Vargas Cote
                        <input type="radio" ref={refAuthor} name='author'value="Willis Cote"/>Willis Cote
                        <input type="radio" ref={refAuthor} name='author' value="Willis Simmons"/>Willis Simmons
                    </label>
                </div>
                <br/>
                <button type="submit">Create news</button>
             </form>
        </div>
    )
}

// export class FormNews extends Component {


//     handleSubmit = (e) => {
//         e.preventDefault();
//         const id = Math.floor(Math.random() * 100) + 1;;
//         const news = {
//             id,
//             ...this.state,
//             hashtag: this.state.hashtag,
//         };
//         this.props.oncreateNew(news);
//         e.target.reset();
//     };

//     setTitle = (e) => {
//         const input = e.target.value;
//         this.setState({
//             title: input,
//         })
//     };

//     setContent = (e) => {
//         const input = e.target.value;
//         this.setState({
//             content: input,
//         })
//     };

//     setDescription = (e) => {
//         const input = e.target.value;
//         this.setState({
//             description: input,
//         })
//     };

//     setAuthor = (e) => {
//         const input = e.target.value;
//         this.setState({
//             author: input,
//         })
//         console.log(input);
//     };

//     setHashtag = (e) => {
//         const input = e.target.value;
//         let newHashtag;
//         newHashtag = [...this.state.hashtag, input];
//         this.setState({
//             hashtag: newHashtag,
//         })
//     };

//     handlePhoto = (e) => {
//         const file = e.currentTarget.files[0];
//         getBase64(file, (base64) => {
//           this.setState({
//             photo: base64,
//           });
//         })
//     };

//     render() {
        
//     }
// } 

export default FormNews;

FormNews.propTypes = {
    oncreateNew: PropTypes.func.isRequired,
};

FormNews.defaultProps = {
};



