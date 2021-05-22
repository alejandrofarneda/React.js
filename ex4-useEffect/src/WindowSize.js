import { useEffect, useState } from 'react';

function WindowSize() {
    const [size, setSize] = useState(
        `${window.innerHeight} x ${window.innerWidth}`
    );
    useEffect(() => {
        function Resize() {
            return (e) => {
                setSize(`${window.innerHeight} x ${window.innerWidth}`);
            };
        }
        window.addEventListener('resize', Resize());        
    }, []);

    return (
        <div>
            <p>{size}</p>
        </div>
    );
}

export default WindowSize;
