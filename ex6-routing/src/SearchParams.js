import './App.css';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

function SearchParams({ name }) {
    const results = useFetch(
        `https://rickandmortyapi.com/api/character?name=${name}`
    );
    console.log(results);

    return (
        <div>
            <p>Resultados</p>
            <div className="results">
                {results?.results?.map((e) => (
                    <div key={e.id} className="result">
                        <p className="nombre">{e.name}</p>
                        <img
                            className="nombre"
                            src={e.image}
                            alt={e.name}
                            width="200"
                            height="100"
                        />
                        <Link to={`/search/byid/${e.id}`}>{e.name}</Link>
                    </div>
                ))}
                {!results && <i>Loading...</i>}
                {results && !results.results && <i>No results found!</i>}
            </div>
        </div>
    );
}

export default SearchParams;
