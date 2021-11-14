import './App.css';
import {newsData} from './news.js'


function CreateNews() {
return (
    <div>
        {newsData.map(el => (
            <div className="sectionNews" key={el.id + "0"}>
                {el.isSpecial && <div key={el.id + "00"} className="special">Important!</div>}
                <div className="title" key={el.id}>{el.title}</div>
                <p key={el.id + "1"} dangerouslySetInnerHTML={{__html: el.content}}   ></p>
                <p key={el.id + "2"}>{el.dateCreated.split("T").join(" ")}</p>
                <div className="categories" key={el.id + "02"}>{el.categories.map(el1 => (<div key={el1.id}>{el1.name}</div>))}
                </div>
                {el.link !== null && <a key={el.id + "3"} href={el.link}>{el.link}</a>}
                {el.photo !== null && <img key={el.id + "4"} src={el.photo} alt={el.title}/>}
                <p key={el.id + "5"}>{el.author}</p>
            </div>
            ))
        }
    </div>
  ) 
}

export default CreateNews;
