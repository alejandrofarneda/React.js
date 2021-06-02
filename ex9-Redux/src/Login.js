import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPass] = useState();
    const isLoggedIn = useSelector((s) => !!s.user); //con la doble exclamacion decimos que si existe user entonces es un booleano true
    const dispatch = useDispatch(); //Lanzamos el action con Redux, dispatch es la funcion de "se ha producido un evento (login)"
    //y le pasamos el parametro del evento

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
                dispatch({ type: 'LOGIN', user: data }); //Aqui es donde definimos que el action login se ha lanzado y definimos al usuario con data
            } else {
                const error = new Error('algo anduvo mal');
                throw error;
            }
        } catch (err) {
            alert(err);
        }
    }

    if (isLoggedIn) {
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
