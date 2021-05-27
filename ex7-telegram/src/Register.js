import './LoginForm.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Register() {
    const [username, setName] = useState();
    const [password, setPass] = useState();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                'http://telegram-api.trek-quest.com/register',
                {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!res.ok) {
                const error = new Error(res.statusText);
                throw error;
            }
            history.push('/login');
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div className="login-container">
            <p></p>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Bienvenido a ICQ🌻 !!</h3>
                <p>Registrate</p>
                <div className="input">
                    <input
                        placeholder="Name..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <br />
                <button>Registrar</button>
            </form>
        </div>
    );
}
