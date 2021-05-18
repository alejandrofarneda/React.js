function Card({ entry }) {
  return (
    <img className="card" src={entry.thumb} alt={entry.title} />
  );
}

export default Card;
