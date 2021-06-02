import './App.css';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import queryString from 'query-string';
import Helmet from 'react-helmet';

function SearchParams({ name }) {
    const results = useFetch(
        `https://rickandmortyapi.com/api/character?` +
            queryString.stringify({ name })
    );

    return (
        <div>
            <Helmet>
                <title>Rick&Morty-{name ? 'Search: ' + name : 'Search'}</title>
            </Helmet>
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
