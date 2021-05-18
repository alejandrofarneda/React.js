import { useState } from 'react';

function Search({ user }) {
    const [words, setWords] = useState();
    const [search, setSearch] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(
            'http://poi-api.trek-quest.com/poi?q=' + words
        );
        const results = await response.json();
        return setSearch(results);
    }

    return (
        <div>
            <h1>Bienvenido {user.username}!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <p>Buscador</p>
                    <input
                        placeholder="Buscar..."
                        value={words}
                        onChange={(e) => setWords(e.target.value)}
                    />

                    <button>Search</button>
                </label>
            </form>
            {search && (
                <div>
                    {search.map((e) => (
                        <div>{e.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
