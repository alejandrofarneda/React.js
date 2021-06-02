import { useEffect, useReducer } from 'react';

function Timer() {
    const [count, dispatch] = useReducer((s) => s < 10 && s + 1, 0);
    //funcionamiento de useReducer sin declarar un store...
    //simple como lo son estas líneas. en la misma 4 declaramos lo que será dispatch
    useEffect(() => {
        const time = setInterval(() => {
            dispatch(); //aqui podriamos llamar un dispatch vacío ya que no existen cases
        }, 1000);

        return () => {
            clearInterval(time);
        };
    }, []);

    return <div className="timer">{count}</div>;
}

export default Timer;
