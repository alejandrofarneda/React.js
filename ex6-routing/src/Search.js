import { useState } from 'react';
import UseFetchByCharName from './UseFetchByCharName';
import './App.css';

function Search() {
    const [char, setChar] = useState(false);
    const url = 'https://rickandmortyapi.com/api/character?name=';
    const [search, handleSubmit] = UseFetchByCharName(url, char);
    console.log(search.error);
    return (
        <>
            {!search && (
                <>
                    <h3>Char Search</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            placeholder="Search by Name"
                            onChange={(e) => setChar(e.target.value)}
                        />
                        <button>Buscar</button>
                    </form>{' '}
                </>
            )}

            {search.error && (
                <>
                    <h1>Try something else...</h1>
                    <h3>Char Search</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            placeholder="Search by Name"
                            onChange={(e) => setChar(e.target.value)}
                        />
                        <button>Buscar</button>
                    </form>
                </>
            )}
            {search.results && (
                <>
                    <h3>Char Search</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            placeholder="Search by Name"
                            onChange={(e) => setChar(e.target.value)}
                        />
                        <button>Buscar</button>
                    </form>
                    <p></p>
                    <div className="results">
                        {search.results.map((e) => (
                            <div key={e.id} className="result">
                                <p className="nombre">{e.name}</p>
                                <img
                                    className="nombre"
                                    src={e.image}
                                    alt={e.name}
                                    width="200"
                                    height="100"
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

export default Search;
