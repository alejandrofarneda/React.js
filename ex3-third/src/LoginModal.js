import { useState } from 'react';
import './Navbar.css';

function LoginModal({ onLogin }) {
    const [isSignup, setSignup] = useState(false);
    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [password2, setPass2] = useState();
    async function handleLogin(e) {
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
                return onLogin(data);
            } else {
            }
        } catch (err) {
            alert(err);
        }
    }

    async function handleRegister(e) {
        e.preventDefault();
        try {
            const response = await fetch(
                'http://poi-api.trek-quest.com/register',
                {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response);
            if (response.ok) {
                const data = await response.json();

                return onLogin(data);
            } else {
            }
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="modal">
            <div className="modal-bg">
                <div className="modal-fg">
                    {!isSignup && (
                        <form onSubmit={(e) => handleLogin(e)}>
                            <h3>Haz Login</h3>
                            Nombre
                            <input
                                value={username}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <button>LogIn</button>
                            <a onClick={(e) => setSignup(true)}>
                                No tienes cuenta? Registrate!
                            </a>
                        </form>
                    )}
                    {isSignup && (
                        <form
                            onSubmit={(e) =>
                                password === password2
                                    ? handleRegister(e)
                                    : alert('Passwords no coinciden')
                            }
                        >
                            <h3>Registrate</h3>
                            Nombre
                            <input
                                value={username}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            Repeat Password
                            <input
                                type="password"
                                value={password2}
                                onChange={(e) => setPass2(e.target.value)}
                            />
                            <button>Register</button>
                            <a onClick={(e) => setSignup(false)}>
                                Tienes cuenta? Haz Login
                            </a>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
