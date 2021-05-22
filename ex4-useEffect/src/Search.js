
import { useState } from 'react';
import Cards from './Cards';
import useFetch from './useFetch';

function Search() {
    const [words, setWords] = useState('');
    const url = 'http://poi-api.trek-quest.com/poi';
    const [search, handleSubmit] = useFetch(words, url)    
    return (
        <div>            
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
            <p>
                <br/>
            </p>
            {search && 
                <div>
                    {search.map((e, i) => <Cards key={i} data={e} />)}
                </div>
            }
        </div>
    );
}

export default Search;
