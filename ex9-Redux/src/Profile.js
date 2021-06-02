import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import UserData from './UserData';

export default function Profile() {
    const isLoggedIn = useSelector((s) => !!s.user);

    if (!isLoggedIn) {
        return <Redirect to={'/login'} />;
    }

    return (
        <div className="profilehome">
            <div className="profilemenu">
                <h3 className="tituloprofile">Profile</h3>

                <NavLink to="/profile/userdata" activeClassName="active" exact>
                    User
                </NavLink>
                <NavLink to="/profile/history" activeClassName="active" exact>
                    History
                </NavLink>
                <NavLink to="/profile/links" activeClassName="active" exact>
                    Links
                </NavLink>
                <Switch>
                    <Route path="/profile/userdata" exact>
                        <UserData />
                    </Route>
                    <Route path="/profile/history" exact>
                        <p className="char">History...</p>
                    </Route>
                    <Route path="/profile/links" exact>
                        <p className="char">Links...</p>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
