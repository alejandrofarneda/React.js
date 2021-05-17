import { useState } from 'react';
import Spinner2 from './Spinner';

function Signup({ onLogin, mail, changeAge, changeEmail }) {
    let [username, setUserN] = useState('');
    let [password, setPass] = useState('');
    let [type, setType] = useState('password');
    function handleSubmit(e) {
        e.preventDefault();        
        
        const data = {username}
        onLogin(data);
        changeEmail(mail);
    }

    return (
        <>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <h3>Login</h3>
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
                <div className="spinner">Edad:</div>{' '}
                <span>
                    <Spinner2 setAge={changeAge} />
                </span>
                <br />
                <label className="email">
                    Email:
                    <input
                        placeholder="Email..."
                        required
                        value={mail}
                        onChange={(e) => changeEmail(e.target.value)}
                        className="emailInput"
                    />
                </label>
                <p></p>
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
                <p></p>
                <button>Log In</button>
            </form>
        </>
    );
}

export default Signup;
