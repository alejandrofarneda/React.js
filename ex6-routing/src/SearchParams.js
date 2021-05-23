import { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router';

function SearchParams() {
    // const [char, setChar] = useState(false);
    // const url = 'https://rickandmortyapi.com/api/character?name=';
    // const [search, handleSubmit] = UseFetchByCharName(url, char);
    // console.log(search.error);
    const { name } = useParams();
    const url = 'https://rickandmortyapi.com/api/character?name=';
    const [search, setSearch] = useState(false);

    useEffect(() => {
        async function findTheCharById() {
            const response = await fetch(url + name);
            const results = await response.json();
            return results.length === 0
                ? setSearch([{ name: 'No se encontraron resultados' }])
                : setSearch(results);
        }
        findTheCharById();
    });

    return (
        <>
            {search.error && (
                <>
                    <h1>Try diferent Param...</h1>
                </>
            )}
            {search.results && (
                <div>
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
                </div>
            )}
        </>
    );
}

export default SearchParams;
