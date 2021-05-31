import { Route, Switch } from 'react-router';
import ChatList from './ChatList';
// import ChatWindow from './ChatWindow';
import Login from './Login';
import { useUser } from './UserContext';
import './App.css';


function Home() {
    const user = useUser();
    return (
        <>
            {!user && (
                <div>
                    <Login />
                </div>
            )}
            {user && (
                <main className="main">
                    <div className="chat-list">
                        <ChatList />
                    </div>
                    <Switch>
                        {/* <Route path="home/chats/:id" >
                            <div>
                                <ChatWindow />
                            </div>
                        </Route> */}
                        <Route path="/home">
                            <div>
                                <h1 className="h1">
                                 Bienvenido {user.username}!!<br/>
                                 Escoge una sala para hablar
                                </h1>
                            </div>
                        </Route>
                    </Switch>
                </main>
            )}
        </>
    );
}
export default Home;
