import { useEffect, useState } from 'react';

function useMyHook(number) {
    console.log('Hook');
    const [count, setCount] = useState(number);
    return [count, setCount];
}

function NewHook() {
    const [count, setCount] = useMyHook(10);

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

export default NewHook;
