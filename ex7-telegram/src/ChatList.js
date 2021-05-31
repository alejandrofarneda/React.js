import { useEffect, useState } from 'react';
import { useUser } from './UserContext';
import './ChatList.css';
import ChatUsers from './ChatUsers';

export default function ChatList() {
    const user = useUser();
    const [contacts, setContacts] = useState();

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
                throw error;
            }
        }
        getContacts();
        
    }, [user]);
    

    return (
       
            <div className="chat-list">
                {contacts &&
                    contacts.map((e) => (
                        <ChatUsers key={e.id} data={e} />
                    ))}
            </div>           
            
       
    );
}
