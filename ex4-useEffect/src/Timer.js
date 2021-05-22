import { useEffect, useState } from 'react';

function Timer() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const time = setInterval(() => {
            setCount((n) => (n > 1 ? n - 1 : 0));
        }, 1000);

        return () => {
            console.log('unmount');
            clearInterval(time);
        };
    }, []);

    return <div className="timer">{count}</div>;
}

export default Timer;
