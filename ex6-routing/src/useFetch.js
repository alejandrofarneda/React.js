import { useEffect, useState } from 'react';
function useFetch(url) {
    const [search, setSearch] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setSearch(data));
    }, [url]);
    console.log(search);
    return search;
}

export default useFetch;
