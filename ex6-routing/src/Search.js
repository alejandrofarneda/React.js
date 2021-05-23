import './App.css';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SearchParams from './SearchParams';

function Search() {
    const { name } = useParams();
    const history = useHistory();
    const [char, setChar] = useState(name || '');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/search/' + char);
    };

    return (
        <div>
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
        </div>
    );
}

export default Search;
