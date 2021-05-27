import './ChatList.css';
import { useUser } from './UserContext';


export default function ChatUsers({ data, setMessage }) {
    const user = useUser()
    async function HandleClick(e) {
        console.log(user.token);
       try {
           const res = await fetch(
               'http://telegram-api.trek-quest.com/chats/' + data.id ,{
                   headers: {
                       Authorization: 'Bearer ' + user.token,
                   }
               }
           );
           setMessage(await res.json());
           
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
