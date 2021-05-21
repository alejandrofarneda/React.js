import { useEffect, useState } from 'react';
function useFetch(words, url) {
    
    const [search, setSearch] = useState(false);

    useEffect(() => {
        !search &&
            fetch(url)
                .then((res) => res.json())
                .then((data) => setSearch(data));
    });
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(
            url + '?q=' + words
        );
        const results = await response.json();
        return results.length === 0
            ? setSearch([{ name: 'No se encontraron resultados' }])
            : setSearch(results);
    }
    return [search, handleSubmit]
}

export default useFetch