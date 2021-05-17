import { useState } from 'react';
import './Login.css';

function Login2({ onLogin }) {
    let [username, setUserN] = useState('');
    let [password, setPass] = useState('');
    let [type, setType] = useState('password');
    let [status, setStatus] = useState();
    let [step, setStep] = useState(1);
    async function handleSubmit(e) {
        e.preventDefault();
        if(step === 1 ){
            setStatus()
            setStep(2)
        }else{
            setStep(3)
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

                if (response.ok) {
                    const data = await response.json();
                    setStatus();
                    return onLogin(data);
                } else {
                    setStep(1);
                    setStatus('error');
                }
            } catch (err) {
                alert(err);
            }
        }

     
        
    }
    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h3>Log In</h3>
            {step === 1 && (
                <>
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
                    {status === 'error' && (
                        <p>Usuario o contraseña incorrecto</p>
                    )}
                    <button>Next</button>
                </>
            )}
            {step === 2 && (
                <>
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
                                    setType(
                                        type !== 'text' ? 'text' : 'password'
                                    )
                                }
                            >
                                Show
                            </button>
                        </span>
                    </label>
                    <br />
                    <button onClick={(e) => setStep(1) + e.preventDefault()}>
                        Prev
                    </button>
                    <button>Log In</button>
                </>
            )}
            {step === 3 && <p>Cargando...</p>}
        </form>
    );
}

export default Login2;
