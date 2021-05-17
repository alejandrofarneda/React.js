import './Radio.css';

function Radio({value, setValue}) {
   
    

    return (
        <div className="hinchada" back>
            <input className={value} value={value} />
            <button
                onClick={() => setValue('River')}
                className={value !== 'River' ? 'nop' : 'River'}
            >
                River
            </button>
            <button
                onClick={() => setValue('Boca')}
                className={value !== 'Boca' ? 'nop' : 'Boca'}
            >
                Boca
            </button>
            <button
                className={value}
                onClick={() => setValue('Unión')}
                className={value !== 'Unión' ? 'nop' : 'Unión'}
            >
                Unión
            </button>
        </div>
    );
}

export default Radio;
