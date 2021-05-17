import { useState } from 'react';

function FindChar({ onChars }) {
    const [char, setChar] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                'https://rickandmortyapi.com/api/character?name=' + char,
                {
                    method: 'GET',
                    headers: new Headers(),
                    mode: 'cors',
                    cache: 'default',
                }
            );
            const character = await response.json();
            if (response.ok) {
                return onChars(character.results);
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <p>Buscador de Imagenes:</p>
                <label className="character">
                    Character:
                    <input
                        placeholder="Name..."
                        required
                        value={char}
                        onChange={(e) => setChar(e.target.value)}
                        className="charInput"
                        autoFocus
                    />
                </label>
                <p></p>
                <button>Search</button>

                <ul className="examples">
                    <u>Ejemplos</u>:<li>Rick</li>
                    <li>Alan</li>
                    <li>Ants</li>
                    <li>Mama</li>
                    <li>Clock</li>
                </ul>
            </form>
        </>
    );
}

export default FindChar;
