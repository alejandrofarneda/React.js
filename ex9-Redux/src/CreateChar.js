import './App.css';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';

function CreateChar() {
    const [name, setName] = useState();
    const token = useSelector((s) => s.user?.token);
    const isLoggedIn = useSelector((s) => !!s.user);
    const history = useHistory();

    const url = `https://rickandmortyapi.com/api/character`;

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (isLoggedIn && token) {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ name }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                history.push('/search/byid/ + data.id');
            } else {
                console.log(res);
                throw new Error(`${res}`);
            }
        }
    };

    return (
        <div>
            <h3>Create Character</h3>
            <form onSubmit={HandleSubmit}>
                <input
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateChar;
