import './App.css';
import Login2 from './Login';
import Spinner2 from './Spinner';
import Calculator2 from './Calculator';
import Toggle2 from './Toggle.js';
import Greetings2 from './Greetings';
import Todolist2 from './Todolist';
import { useState } from 'react';
import Signup from './Signup';
import Radio from './Radio';
import FindChar from './FindChar';

function App2() {
    const [isLogged, setLogged] = useState();
    const [age, setAge] = useState(false);
    const [email, setEmail]= useState('');
    const [message, setMessage] = useState('');
    const [chars, setChars] = useState(null);

    return (
        <div className="App2">
            <Spinner2 />
            <p className="separador">
                ------------------------------Spinner------------------------------
            </p>
            <Calculator2 />
            <p className="separador">
                -----------------------------Calculator----------------------------{' '}
                <br />
                La calculadora por cuestiones de tiempo solo opera entre dos
                <br />
                numeros enteros de un único dígito (ej: 1 + 2 ó 5 / 3).
            </p>
            <Toggle2 />
            <p className="separador">
                ------------------------------Spoiler +
                Toggle------------------------------
            </p>
            <Greetings2 />
            <p className="separador">
                -----------------------------Greetings-----------------------------
            </p>
            {!isLogged ? (
                <Login2 defaultUser="demo" onLogin={setLogged} />
            ) : (
                <div className="bienvenido">
                    <h1 className="h1">Bienvenido!</h1>
                    <p className="nombre">Usuario: {isLogged.username}</p>                   
                </div>
            )}

            <p className="separador">
                -------------------------------LogIn-------------------------------
            </p>
            <Todolist2 />
            <p className="separador">
                -------------------------------TodoList-------------------------------
            </p>
            {!isLogged ? (
                <Signup
                    onLogin={setLogged}
                    changeAge={setAge}
                    mail={email}
                    changeEmail={setEmail}
                />
            ) : (
                <div className="bienvenido">
                    <h1 className="h1">Bienvenido!</h1>
                    <p className="nombre">
                        Usuario: {isLogged.username}
                        <br />
                        Edad: {age}
                        <br />
                        Email: {email}
                    </p>
                </div>
            )}
            <p className="separador">
                -------------------------------SignUp-------------------------------
            </p>
            <Radio value={message} setValue={setMessage} />
            <p className="separador">
                -------------------------------Radio-------------------------------
            </p>
            {!chars ? (
                <FindChar onChars={setChars} />
            ) : (
                <div>
                    {chars.map((e) => (
                        <form className="bienvenido">
                            <h1 className="h1">Resultados:</h1>
                            <p className="nombre">{e.name}</p>
                            <img
                                className="nombre"
                                src={e.image}
                                alt={e.name}
                                width="200"
                                height="100"
                            />
                            <p></p>
                            <button>New Search</button>
                        </form>
                    ))}
                </div>
            )}
            <p className="separador">
                -------------------------------FindChar-------------------------------
            </p>
            

        </div>
    );
}

export { App2 };
