import PropTypes from 'prop-types';


export const NewsList = (props) => {

        const { items, ondeleteNews } = props;

        return (
            <div className="newsSection">
                {items.map(el => (
                    <div key={el.id}>
                        <div>{el.title}</div>
                        <div>{el.content}</div>
                        <div >{el.description}</div>
                        <img src={el.photo}></img>
                        <p>{el.hashtag.map(elem => '#' + elem + ' ')}</p>
                        <div>{el.author}</div>
                        <button onClick={() => ondeleteNews(el.id)}>Delete</button>
                        <hr/>
                    </div>
                ))}
            </div>
        )
}

export default NewsList;

NewsList.propTypes = {
    items: PropTypes.array,
};

NewsList.defaultProps = {
};