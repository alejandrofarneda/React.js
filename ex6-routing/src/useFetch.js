import { useEffect, useReducer, useState } from 'react';
import { useUser } from './UserContext';
function useFetch(url) {
    const [search, setSearch] = useState(null);
    const user = useUser();

    useEffect(() => {
        const opts = {};

        if (user && user.token) {
            opts.headers = { Authorization: 'Bearer ' + user.token };
        }

        fetch(url, opts)
            .then((res) => res.json())
            .then((data) => setSearch(data));
    }, [url, user]);
    return search;
}

export default useFetch;
