import { useState } from 'react';
import './Toggle.css';

function Toggle2() {
    const [hidden, setHidden] = useState('disabled');

    return (
        <>
            <p className="texto">
                You wouldn't dare... <span className={hidden}>Bitch!</span>
            </p>
            <span>Would u? </span>
            <button
                onClick={() =>
                    setHidden(hidden === 'disabled' ? 'enabled' : 'disabled')
                }
            >
                {hidden === 'disabled' ? 'Yap' : '=('}
            </button>
        </>
    );
}
export default Toggle2;
