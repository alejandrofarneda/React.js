import { Route, Switch } from 'react-router';

import './App.css';
import ChangeAvatar from './ChangeAvatar';
import ChatWindow from './ChatWindow';
import ErrorBoundary from './ErrorBoundary';
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
                <>
                    <main className="main">
                        <Switch>
                            <Route path="/home/chats/:id" exact>
                                <ErrorBoundary
                                    fallback={<h1>Error en Chat-Window</h1>}
                                >
                                    <ChatWindow />
                                </ErrorBoundary>
                            </Route>
                            <Route path="/profile">
                                <ChangeAvatar />
                            </Route>
                            

                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </main>
                </>
            )}
        </div>
    );
}

export default App;
