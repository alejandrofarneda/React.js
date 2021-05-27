import { Route, Switch } from 'react-router';

import './App.css';
// import ChatUsers from './ChatUsers';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Register from './Register';
import { useUser } from './UserContext';

function App() {
    const user = useUser();
    return (
        <div className="App">
            <NavBar />
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                        <div>
                            <h1 className="h1">Bienvenido {user.username}!</h1>
                        </div>
                    </Route>
                    {/* <Route path="/chat/?" >
                        <ChatUsers />
                    </Route> */}
                    <div className="home-login">
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route path="/register" exact>
                            <Register />
                        </Route>
                    </div>

                    <Route path="/">
                        <h1>Not Found</h1>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
