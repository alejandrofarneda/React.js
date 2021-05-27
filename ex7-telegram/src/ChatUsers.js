import { useHistory } from 'react-router';
import './ChatList.css';
import { useUser } from './UserContext';
import { useParams } from 'react-router-dom';

export default function ChatUsers({ data, setMessage }) {
    const history = useHistory();
    const user = useUser();
    const { id } = useParams();

    async function HandleClick(e) {
        try {
            const res = await fetch(
                'http://telegram-api.trek-quest.com/chats/' + data.id,
                {
                    headers: {
                        Authorization: 'Bearer ' + user.token,
                    },
                }
            );
            const mensajes = await res.json();
            setMessage(mensajes);
            history.push('/chats/' + data.id);
        } catch (error) {
            alert(error);
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
