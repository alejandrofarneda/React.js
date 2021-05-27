import { Route, Switch } from 'react-router';

import './App.css';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
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
            <div className="home-login">
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
            </div>
            {user && (
                <main className="main">
                    <Switch>
                        <Route path="/home" exact>
                            <Home />
                        </Route>
                        
                        <Route path="/chats/:id" exact>
                            <ChatList />
                            <ChatWindow />
                            <div>
                                <h1 className="h1">
                                    Bienvenido {user.username}!
                                    <br />
                                    |HA|
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br /> |CK|
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br /> |A|
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br /> |BO|
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br /> |SS|
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    \ . /
                                    <br />
                                    / . \
                                    <br />
                                    |BITCH|
                                </h1>
                            </div>
                        </Route>

                        <Route path="/">
                            <h1>Not Found</h1>
                        </Route>
                    </Switch>
                </main>
            )}
        </div>
    );
}

export default App;
