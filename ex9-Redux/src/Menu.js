import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './App.css';

function Menu() {
    const user = useSelector((s) => s.user); //Aquí sera s.user ya que ahora con combineReducers users es un objeto dentro del store
    console.log('Redux says user = ', user);
    const dispatch = useDispatch(); //Llamamos a la funcion dispatch
    // const token = useSelector(s => s.token) le pasamos un callback que coge el state y nos devuelve el trozo que nos interesa
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGOUT', user: null });
    };
    return (
        <div className="menu">
            <p>Menu</p>
            <br />
            <NavLink to="/" activeClassName="active" exact>
                Home
            </NavLink>
            <NavLink to="/search" activeClassName="active" exact>
                Search
            </NavLink>

            <NavLink to="/character/new" activeClassName="active" exact>
                New Char
            </NavLink>

            <NavLink to="/about" activeClassName="active" exact>
                About
            </NavLink>
            <br />
            <p>Top 5</p>
            <NavLink to="/search/byid/1" activeClassName="active" exact>
                Rick
            </NavLink>
            <NavLink to="/search/byid/2" activeClassName="active" exact>
                Morty
            </NavLink>
            <NavLink to="/search/byid/3" activeClassName="active" exact>
                Summer
            </NavLink>
            <NavLink to="/search/byid/4" activeClassName="active" exact>
                Beth
            </NavLink>
            <NavLink to="/search/byid/5" activeClassName="active" exact>
                Jerry
            </NavLink>
            <NavLink to="/login" className="login" exact>
                {!user ? (
                    <p>Log-In</p>
                ) : (
                    <div>
                        <div>{user.username}</div>{' '}
                        <img
                            className="img"
                            width="90rem"
                            alt={user.username}
                            src={user.avatar}
                        />
                        <div onClick={handleLogout}>
                            <i class="far fa-sign-out-alt">Logout</i>
                        </div>
                    </div>
                )}
            </NavLink>
        </div>
    );
}
export default Menu;
