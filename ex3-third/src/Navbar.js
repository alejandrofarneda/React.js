import './Navbar.css'

import { useState } from 'react';
import LoginModal from './LoginModal';
function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [isLoged, setLoged] = useState(false);
   
    return (
        <div className="todo">
            <div className="navbar">
                <div className="logo">MyApp</div>
                <div className="user">
                    <img
                        className="avatar"
                        src={isLoged ? isLoged.avatar : ''}
                        alt="imagen"
                        width="70px"
                        height="40px"
                    />
                    <span>{isLoged ? isLoged.username : ''}</span>
                    <button onClick={() => setShowModal(true)}>LogIn</button>
                </div>
            </div>
            {showModal && <LoginModal onLogin={setLoged} />}
        </div>
    );
}

export default Navbar;
