import { useState } from 'react';
import './Login.css';

function Login2({ onLogin }) {
    let [username, setUserN] = useState('');
    let [password, setPass] = useState('');
    let [type, setType] = useState('password');
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                'http://chat-api.trek-quest.com/login',
                {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            if (response.ok) {
                return onLogin(data);
            }
        } catch (err) {
            alert(err);
        }
    }
    return (
        <>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <p></p>
                <label className="usuario">
                    Username:
                    <input
                        placeholder="User..."
                        required
                        value={username}
                        onChange={(e) => setUserN(e.target.value)}
                        className="userInput"
                    />
                </label>
                <br />
                <label className="password">
                    Password:
                    <input
                        type={type}
                        required
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        className="passInput"
                    />
                    <span>
                        <button
                            className="showPass"
                            type="button"
                            onClick={() =>
                                setType(type !== 'text' ? 'text' : 'password')
                            }
                        >
                            Show
                        </button>
                    </span>
                </label>
                <br />
                <button>Log In</button>
            </form>
        </>
    );
}

export default Login2;
