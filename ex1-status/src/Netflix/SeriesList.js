import Card from "./Card";

function SeriesList({ title, entries }) {
  return (
    <div className="series-list">
      <h1>{title}</h1>
      <div className="entries">
        {entries.map(s =>
          <Card key={s.id} entry={s} />
        )}
      </div>
    </div>
  );
}

export default SeriesList;
