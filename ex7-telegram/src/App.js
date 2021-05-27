import { Route, Switch } from 'react-router';

import './App.css';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Register from './Register';

function App() {
    return (
        <div className="App">
            <NavBar />
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
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
