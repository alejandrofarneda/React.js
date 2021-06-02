import './App.css';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import SearchParams from './SearchParams';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';

function Search() {
    const { name } = useParams();
    const history = useHistory();
    const [char, setChar] = useState(name || '');
    const dispatch = useDispatch(); //Nos traemos el dispatch de useDispatch que es el gatillo
    const recent = useSelector((s) => s.history); //Atento a lo que es history aqui! es unb elemento dentro del localstorage guardado con redux en el middleware

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/search/' + char);
        dispatch({ type: 'SEARCH', char });
        //Activamos el gatillo del reducer, en el submit cuando buscamos algo, nos guardamos el valor en el case "SEARCH"
    };

    return (
        <div>
            <Helmet>
                <title>Rick&Morty-{char ? 'Search: ' + char : 'Search'}</title>
            </Helmet>
            <h3>Char Search</h3>
            <form onSubmit={handleSubmit}>
                <input
                    value={char}
                    placeholder="Search by Name"
                    onChange={(e) => setChar(e.target.value)}
                />
                <button>Buscar</button>
            </form>
            {name && <SearchParams name={name} />}
            {!name && recent.length > 0 && (
                <div className="history">
                    <h2>Recent Search:</h2>
                    <ul>
                        {recent.map(
                            (e) => (
                                <li key={e}>
                                    <Link to={`/search/${e}`}>{e}</Link>
                                </li>
                            ) //Recent entonces es un array y haríamos el map del mismo llamando a un Link por cada busqueda
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Search;
