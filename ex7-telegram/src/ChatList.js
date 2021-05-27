import { useEffect, useState } from 'react';
import { useUser } from './UserContext';
import './ChatList.css';
import ChatWindow from './ChatWindow';
import ChatUsers from './ChatUsers';

export default function ChatList() {
    const user = useUser();
    const [contacts, setContacts] = useState();
    const [msj, setMsj] = useState();

    useEffect(() => {
        async function getContacts() {
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
                    setContacts(await res.json());
                } else {
                    const error = new Error('Algo anduvo Mal!');
                    throw error;
                }
            } catch (error) {
                alert(error);
            }
        }
        getContacts();
        
    }, [user]);
    useEffect(()=>{
        console.log(msj);
    }, [msj])

    return (
        <div className="mensajeria">
            <div className="chat-list">
                {contacts &&
                    contacts.map((e) => (
                        <ChatUsers key={e.id} data={e} setMessage={setMsj} />
                    ))}
            </div>
            
            <div className='chat-window'>
                <ChatWindow mesage={msj} setMessage={setMsj}/>
            </div>
        </div>
    );
}
