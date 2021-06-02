import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function useFetch(url) {
    const [search, setSearch] = useState(null);
    const token = useSelector((s) => s.user?.token);

    useEffect(() => {
        const opts = {};

        if (token) {
            opts.headers = { Authorization: 'Bearer ' + token };
        }

        fetch(url, opts)
            .then((res) => res.json())
            .then((data) => setSearch(data));
    }, [url, token]);
    return search;
}

export default useFetch;
