import './App.css';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import queryString from 'query-string'

function SearchParams({ name }) {
    console.log(name);
    const results = useFetch(
        `https://rickandmortyapi.com/api/character?` + queryString.stringify({name})
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
                        <Link to={`/search/byid/${e.id}`}>Info</Link>
                    </div>
                ))}
                {!results && <i>Loading...</i>}
                {results && !results.results && <i>No results found!</i>}
            </div>
        </div>
    );
}

export default SearchParams;
