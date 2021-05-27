import { useEffect } from 'react';
import './ChatList.css';
import { useUser } from './UserContext';


export default function ChatUsers({ data, setMessage }) {
    const user = useUser()
    async function HandleClick(e) {
       try {
           const res = await fetch(
               'http://telegram-api.trek-quest.com/chats/' + data.id ,{
                   headers: {
                       Authorization: 'Bearer ' + user.token,
                   }
               }
           );
           const mensajes = await res.json();
           setMessage(mensajes);
           
       } catch (error) {
           alert(error)
       }    
    }

    

    return (
        <div onClick={(e) => HandleClick(e)}>
            <div>
                <div key={data.id} className="users">
                    <img
                        className="avatar"
                        src={data.avatar}
                        alt={data.username}
                        width="80rem"
                    />
                    <div className="username">{data.username}</div>
                </div>
            </div>
        </div>
    );
}
