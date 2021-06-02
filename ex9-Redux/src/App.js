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
import Helmet from 'react-helmet';

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Rick&Morty-App</title>
            </Helmet>
            <Menu />
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <Helmet>
                            <title>Rick&Morty-Home</title>
                        </Helmet>
                        <Home />
                    </Route>
                    <Route path="/search/:name?" exact>
                        <Search />
                    </Route>
                    <Route path="/search/byid/:id" exact>
                        <Helmet>
                            <title>Rick&Morty-Character</title>
                        </Helmet>
                        <Character />
                    </Route>
                    <Route path="/about" exact>
                        <Helmet>
                            <title>Rick&Morty-About</title>
                        </Helmet>
                        <About />
                    </Route>
                    <Route path="/login" exact>
                        <Helmet>
                            <title>Rick&Morty-Login</title>
                        </Helmet>
                        <Login />
                    </Route>
                    <Route path="/profile">
                        <Helmet>
                            <title>Rick&Morty-Profile</title>
                        </Helmet>
                        <Profile />
                    </Route>

                    <Route path="/character/new" exact>
                        <Helmet>
                            <title>Rick&Morty-CreateChar</title>
                        </Helmet>
                        <CreateChar />
                    </Route>

                    <Route path="/">
                        <Helmet>
                            <title>Rick&Morty 404</title>
                        </Helmet>
                        <h1>Not Found</h1>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
