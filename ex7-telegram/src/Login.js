import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import './LoginForm.css';
import { useSetUser, useUser } from './UserContext';

export default function Login() {
    const [username, setName] = useState();
    const [password, setPass] = useState();
    const history = useHistory();
    const setUser = useSetUser()
    const user = useUser()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                'http://telegram-api.trek-quest.com/login',
                {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (res.ok) {
                const results = await res.json();
                setUser(results)
               history.push('/home')
            }else{
                 const error = new Error(res.statusText);
                 throw error;
            }
        } catch (error) {
            alert(error);
        }
    };
     if (user) {
         return <Redirect to="/home" />;
     }
    return (
        <div className="login-container">
            <p></p>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Bienvenido a ICQ🌻 !!</h3>
                <p>Haz Login</p>
                <div className="input">
                    <input
                        placeholder="Name..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        type='password'
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <br />
                <button>LogIn</button>
            </form>
        </div>
    );
}
