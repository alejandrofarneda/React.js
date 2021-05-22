import { useEffect, useState } from 'react';
function useFetch(url) {
    const [search, setSearch] = useState(false);

    useEffect(() => {
        !search &&
            fetch(url)
                .then((res) => res.json())
                .then((data) => setSearch(data));
    });
    return [search];
}

export default useFetch;
