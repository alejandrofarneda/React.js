import './Navbar.css';

import { useState } from 'react';
import LoginModal from './LoginModal';
import Search from './Search';
function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [isLoged, setLoged] = useState(false);
    

    return (
        <div className="todo">
            <div className="navbar">
                <div className="logo">MyApp</div>
                {isLoged ? (
                    <div className="user">
                        <img
                            className="avatar"
                            src={isLoged.avatar}
                            alt="imagen"
                            width="70px"
                            height="40px"
                        />
                        <span>{isLoged.username}</span>
                        <button onClick={() => setShowModal(true)}>
                            LogIn
                        </button>
                    </div>
                ) : (
                    <button onClick={() => setShowModal(true)}>LogIn</button>
                )}
            </div>

            {showModal && (
                <LoginModal onLogin={setLoged} clickOff={setShowModal} />
            )}
            {isLoged && <Search user={isLoged} />}
        </div>
    );
}

export default Navbar;
