import ChatList from './ChatList';
import Login from './Login';
import { useUser } from './UserContext';

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
                <>
                    <div className="chat-window">
                        <ChatList />
                    </div>
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
                </>
            )}
        </>
    );
}
export default Home;
