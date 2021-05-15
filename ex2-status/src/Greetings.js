import { useState } from 'react';

function Greetings2() {
    let [user, setUser] = useState('');
    let [submit, setSubmit] = useState('');

    return (
        <>
            <input               
                placeholder='Tu nombre...'
                value={user}
                onChange={(e) => setUser((e.target.value))}
            ></input>
            <button onClick={() => setSubmit((submit = user)) + setUser(user = '')}>Enter</button>
            <p>Tu nombre es {submit}</p>
        </>
    );
}
export default Greetings2;
