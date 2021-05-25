import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSetUser, useUser } from './UserContext';

export default function Login() {
    const setUser = useSetUser();
    const [username, setUsername] = useState();
    const [password, setPass] = useState();
    const history = useHistory();
    const user = useUser();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                'http://poi-api.trek-quest.com/login',
                {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();

                console.log(data);
                setUser(data);

                history.push('/');
            } else {
                const error = new Error('algo anduvo mal');
                throw error;
            }
        } catch (err) {
            alert(err);
        }
    }

    if (user) {
        return <Redirect to="/profile" />;
    }

    return (
        <div className="loginform" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Haz Login</h3>
                <input
                    className="input"
                    placeholder="Username..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    className="input"
                    type="password"
                    placeholder="Password..."
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <button>LogIn</button>
            </form>
        </div>
    );
}
