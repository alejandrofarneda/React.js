import './App.css';
import Login2 from './Login';
import Spinner2 from './Spinner';
import Calculator2 from './Calculator';
import Toggle2 from './Toggle.js';
import Greetings2 from './Greetings';
import Todolist2 from './Todolist';
import { useState } from 'react';
import Signup from './Signup';

function App2() {
    const [isLogged, setLogged] = useState(false);
    const [age, setAge] = useState(false)
    const [email, setEmail]= useState(false)
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
                numeros enteros de un único dígito (ej: 1 + 2 ó 25 / 3).
            </p>
            <Toggle2 />
            <p className="separador">
                ------------------------------Spoiler------------------------------
            </p>
            <Greetings2 />
            <p className="separador">
                -----------------------------Greetings-----------------------------
            </p>
            <Login2 defaultUser="demo" />

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
                    changeEmail={setEmail}
                />
            ) : (
                <div className="bienvenido">
                    <h1 className="h1">Bienvenido!</h1>
                    <p className="datos">
                        Usuario: {isLogged}
                        <br />
                        Edad: {age}
                        <br />
                        Edad: {email}
                    </p>
                </div>
            )}
        </div>
    );
}

export { App2 };
