import { useState } from 'react';
import './Login.css'

function Login2() {
    let [userN, setUserN] = useState('');
    let [pass, setPass] = useState('')
    let [type, setType] = useState('password');
    let [show, setShow] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        setShow(show = 'Welcome ' + userN + '!!') 
               
    }
    if(show !== ''){
        return (
            <div>
                <p className="welcome">{show}</p>
            </div>
        );

    }
    return (
        <>
            <form
                className="form"
                onSubmit={(e) =>
                    handleSubmit(e)}
            >
                <p></p>
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
                <button>Log In</button>

                
            </form>
        </>
    );
}

export default Login2;
