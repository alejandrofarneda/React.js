import './Cards.css'

function Cards({ data }) {
    return (
        <div className="cards">
            <div
                className="photo"
                style={{ backgroundImage: `url(${data.photo})` }}
            />
            <div className="info">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default Cards;
