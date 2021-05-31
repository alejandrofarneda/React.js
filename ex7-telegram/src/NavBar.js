import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useSetUser, useUser } from './UserContext';
import { useHistory } from 'react-router';

function NavBar() {
    const user = useUser();
    const setUser = useSetUser();
    const history = useHistory();

    function handleLogout(e) {
        e.preventDefault();
        setUser(null);
        history.push('/login');
    }
    return (
        <div className="menu">
            <div className="menu2">
                <NavLink to="/home" className="home" exact>
                    ICQ🌻
                </NavLink>
                <div className="user-nav">
                    {!user ? (
                        <NavLink to="/login" activeClassName="active" exact>
                            <p>Log-In</p>
                        </NavLink>
                    ) : (
                        <NavLink to="/profile" activeClassName="active" exact>
                            <div className="user">
                                <img
                                    className="img"
                                    width="80rem"
                                    alt={user.username}
                                    src={user.avatar}
                                />
                                <div className="username">{user.username}</div>{' '}
                                <span
                                    className="logout"
                                    onClick={(e) => handleLogout(e)}
                                >
                                    Logout
                                </span>
                            </div>
                        </NavLink>
                    )}

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
