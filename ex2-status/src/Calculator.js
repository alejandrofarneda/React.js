import './Calculator.css';
import { useState } from 'react';

function Calculator2() {
    let [n, setN] = useState('0');
    let [a, setA] = useState('0');
    let [b, setB] = useState('0');
    let [c, setC] = useState('+');
    function handleA(e) {
        setA((a = e));
        setN(e);
    }
    function handleB(e) {
        setB((b = e));
         setN(e);
       
    }
    function handleC(e) {
        setC((c = e));
        setN(e);
        
    }
    function clear(a, b, c) {
        setA((a = 0));
        setB((b = 0));
        setC((c = '+'));
    }
    function operacion(a, b, c) {
        if (c === '+') {
            setN((n = a + b));
            clear(a, b, c);
        } else if (c === '-') {
            setN((n = a - b));
            clear(a, b, c);
        } else if (c === '*') {
            setN((n = a * b));
            clear(a, b, c);
        } else {
            setN((n = a / b));
            clear(a, b, c);
        }
    }
    function wipe() {
        setN((n = 0));
        clear(a, b, c);
    }
    const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    return (
        <div className="calculator">
            <h2 className="numero">{n}</h2>
            <div>
                <button
                    type="button"
                    className="mas"
                    onClick={(e) => handleC('+')}
                >
                    +
                </button>
                <button
                    type="button"
                    className="mult"
                    onClick={() => handleC('*')}
                >
                    *
                </button>
            </div>
            <div>
                <button
                    type="button"
                    className="menos"
                    onClick={() => handleC('-')}
                >
                    -
                </button>
                <button
                    type="button"
                    className="div"
                    onClick={() => handleC('/')}
                >
                    /
                </button>
            </div>
            <div className="numeros">
                {numeros.map((n, i) => (
                    <button
                        type="button"
                        className="num"
                        onClick={() => (a === 0 ? handleA(n) : handleB(n))}
                    >
                        {n}
                    </button>
                ))}{' '}
            </div>
            <button
                type="button"
                className="igual"
                onClick={() => operacion(a, b, c)}
            >
                =
            </button>
            <button type="button" className="ce" onClick={() => wipe()}>
                C
            </button>
        </div>
    );
}

export default Calculator2;
