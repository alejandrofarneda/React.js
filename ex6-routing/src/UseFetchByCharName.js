import { useState } from 'react';

function UseFetchByCharName(url, char) {
    const [search, setSearch] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(url + char);
            const results = await response.json();
            return results.length === 0
                ? setSearch([{ name: 'No se encontraron resultados' }])
                : setSearch(results);
        } catch (error) {
            alert('Try something else next Time');
        }
    }
    return [search, handleSubmit];
}

export default UseFetchByCharName;
