import { useState } from 'react';
import Spinner2 from './Spinner';



function Signup({ onLogin, changeAge, changeEmail }) {
    let [userN, setUserN] = useState('');
    let [pass, setPass] = useState('');
    let[age, setAge] = useState('')
    let [type, setType] = useState('password');
    let[email, setEmail] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        onLogin(userN);
        changeAge(age)
        changeEmail(email);
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
                        value={userN}
                        onChange={(e) => setUserN(e.target.value)}
                        className="userInput"
                    />
                </label>
                <br />
                <div className="spinner">Edad:</div>{' '}
                <span>
                    <Spinner2 age={setAge} />
                </span>
                <br />
                <label className="email">
                    Email:
                    <input
                        placeholder="Email..."
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={pass}
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

