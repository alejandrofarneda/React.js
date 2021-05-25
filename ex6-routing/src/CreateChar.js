import './App.css';
import { useState } from 'react';
import { useUser } from './UserContext';
import { Redirect } from 'react-router';

function CreateChar() {
    const [charName, setCharName] = useState();
    const user = useUser();
    const url = `https://rickandmortyapi.com/api/character`;

    if (!user) {
        return <Redirect to="/login" />;
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (user && user.token) {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ charName }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + user.token,
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                //history.push('/search/byid/ + data.id) => Si todo va bien, redirigimos al usuario a la pagina del pj creado.
            }
        }
    };

    return (
        <div>
            <h3>Create Character</h3>
            <form onSubmit={HandleSubmit}>
                <input
                    placeholder="Name"
                    onChange={(e) => setCharName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateChar;
