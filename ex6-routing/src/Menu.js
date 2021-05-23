import { NavLink } from 'react-router-dom';
import './App.css';

function Menu() {
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
        </div>
    );
}
export default Menu;
