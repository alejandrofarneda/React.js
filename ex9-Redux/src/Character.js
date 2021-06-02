import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Character() {
    const { id } = useParams();
    const url = 'https://rickandmortyapi.com/api/character';
    const [search, setSearch] = useState(false);

    useEffect(() => {
        async function findTheCharById() {
            const response = await fetch(url + '/' + id);
            const results = await response.json();
            return results.length === 0
                ? setSearch([{ name: 'No se encontraron resultados' }])
                : setSearch(results);
        }
        findTheCharById();
    }, [id]);

    return (
        <>
            {search && (
                <div className="char">
                    <div>{search.name}</div>
                    <img
                        className="img"
                        src={search.image}
                        alt={search.name}
                        width="250"
                        height="200"
                    />
                    <div>{'Especie: ' + search.species}</div>
                    <div>{'Locación: ' + search.location.name}</div>
                </div>
            )}
        </>
    );
}

export default Character;
