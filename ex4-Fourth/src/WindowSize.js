import { useEffect, useState } from 'react';

function WindowSize() {
    const [size, setSize] = useState(
        `${window.innerHeight} x ${window.innerWidth}`
    );
    useEffect(() => {
        window.addEventListener('resize', Resize());
    }, []);
    function Resize() {
        return (e) => {
            setSize(`${window.innerHeight} x ${window.innerWidth}`)
        };
    }

    return (
        <div>
            <p>{size}</p>
        </div>
    );
}

export default WindowSize;
