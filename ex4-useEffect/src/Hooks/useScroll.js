import { useEffect, useState } from 'react';

function useScroll(){
    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        const scrolling = () => {
            setY(window.scrollY.toString().slice(0, 7));
        };
        window.addEventListener('scroll', scrolling);
        return () => window.removeEventListener('scroll', scrolling);
    }, []);
    return y;
}
export default useScroll