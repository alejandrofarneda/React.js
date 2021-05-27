import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useUser } from './UserContext';

function NavBar() {
    const user = useUser();
    return (
        <div className="menu">
            <div className="menu2">
                <NavLink to="/" className="home" exact>
                    ICQ🌻
                </NavLink>
                <div className="user-nav">
                    <NavLink to="/login" activeClassName="active" exact>
                        {!user ? (
                            <p>Log-In</p>
                        ) : (
                            <div className='user'>
                                <div className='username'>{user.username}</div>{' '}
                                <img
                                    className="img"
                                    width="80rem"
                                    alt={user.username}
                                    src={user.avatar}
                                />
                            </div>
                        )}
                    </NavLink>
                    {!user && (
                        <NavLink to="/register" activeClassName="active">
                            Register
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}
export default NavBar;
