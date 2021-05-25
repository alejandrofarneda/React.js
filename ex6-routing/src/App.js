import { Route, Switch } from 'react-router';
import About from './About';
import './App.css';
import Character from './Character';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Profile from './Profile';
import Search from './Search';
import CreateChar from './CreateChar';

function App() {
    return (
        <div className="App">
            <Menu />
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/search/:name?" exact>
                        <Search />
                    </Route>
                    <Route path="/search/byid/:id" exact>
                        <Character />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/character/new" exact>
                        <CreateChar />
                    </Route>

                    <Route path="/">
                        <h1>Not Found</h1>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
