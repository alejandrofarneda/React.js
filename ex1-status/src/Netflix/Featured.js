function Featured({ featured }) {
  return (
    <div className="featured" style={{ backgroundImage: `url(${featured.cover})` }}>
      <div className="text-box">
        <h1>{featured.title}</h1>
        <p>{featured.description}</p>
      </div>
    </div>
  );
}

export default Featured;
