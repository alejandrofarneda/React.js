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
            {user && 
                <div className='chat-window'>
                    <ChatList/>
                </div>
            
            }
        </>
    );
}
export default Home;
