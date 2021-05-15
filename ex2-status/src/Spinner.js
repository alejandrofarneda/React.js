import { useState } from 'react';

function Spinner2({ age }) {
    const [n, setN] = useState(7);

    function handlePlus() {
        setN(n + 1);
        age(n);
    }

    function handleLess() {
        setN(n - 1);
        age(n);
    }

    return (
        <div>
            <button type="button" className="menos" onClick={handleLess}>
                -
            </button>
            <span>---{n}---</span>

            <button type="button" className="mas" onClick={handlePlus}>
                +
            </button>
        </div>
    );
}

export default Spinner2;
