import { useEffect, useState } from 'react';

function Mount() {
    const [t, setT] = useState('');
    const [timeUp, setTimeUp] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {        
            const inter = setInterval(() => {
                setMessage('');
                setT('');
                setTimeUp(true);
                setTimeout(() => {
                    setTimeUp(false);
                }, 1000);                         
            }, 7000);    
            return () => {
                clearInterval(inter);
            }  
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (t.toLowerCase().includes('mujica')) {
            setMessage(1);            
        } else {
            setMessage(2);
            
        }
    }

    return (
        <div className="mount">
            {!timeUp && (
                <>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h3>Superheroe sin capa</h3>
                        <input
                            value={t}
                            onChange={(e) => setT(e.target.value)}
                        />
                        <button>See...</button>
                    </form>
                </>
            )}
            <h1>{message === 1 && 'Correcto!'}</h1>
            {message === 2 && (
                <>
                    <p> Incorrecto</p>
                    <p>Pista: Ex presidente de Uruguay.</p>
                </>
            )}
            {timeUp && <h1>Time´s Up Bitch...</h1>}
        </div>
    );
}

export default Mount;
