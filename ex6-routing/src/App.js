import { Route, Switch } from 'react-router';
import About from './About';
import './App.css';
import Character from './Character';
import Home from './Home';
import Menu from './Menu';
import Search from './Search';
import SearchParams from './SearchParams';

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
                    {/* <Route path="/search/:name" exact>
                        <SearchParams />
                    </Route> */}
                    <Route path="/search/byid/:id" exact>
                        <Character />
                    </Route>
                    <Route path="/about" exact>
                        <About />
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
