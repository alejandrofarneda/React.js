import { useEffect, useState } from 'react';
import { useUser } from './UserContext';
import './ChatList.css';
import ChatWindow from './ChatWindow';
import ChatUsers from './ChatUsers';

export default function ChatList() {
    const user = useUser();
    const [chats, setChat] = useState();
    const [msj, setMsj] = useState();

    useEffect(() => {
        async function getChats() {
            try {
                const res = await fetch(
                    'http://telegram-api.trek-quest.com/chats',
                    {
                        headers: {
                            Authorization: 'Bearer ' + user.token,
                        },
                    }
                );
                if (res.ok) {
                    setChat(await res.json());
                } else {
                    const error = new Error('Algo anduvo Mal!');
                    throw error;
                }
            } catch (error) {
                alert(error);
            }
        }
        getChats();
    }, [user]);
    console.log(msj);

    return (
        <div className="mensajeria">
            <div className="chat-list">
                {chats &&
                    chats.map((e) => (
                        <ChatUsers key={e.id} data={e} setMessage={setMsj} />
                    ))}
            </div>
            <div className='chat-window'>
                <ChatWindow message={msj}/>
            </div>
        </div>
    );
}
