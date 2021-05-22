import { useEffect, useState } from 'react';
import './Modal.css';

function Clock() {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const inter = setInterval(() => {
            setClock(new Date());
        }, 100);
        return () => clearInterval(inter);
    }, []);
    return (
        <div>
            <p className="clock">{clock.toString().slice(15, 24)}</p>
        </div>
    );
}

export default Clock;
