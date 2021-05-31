import { useHistory } from 'react-router';
import './ChatList.css';

export default function ChatUsers({ data }) {
    const history = useHistory();

    async function HandleClick(e) {
        history.push('/home/chats/' + data.id);
    }

    return (
        <div onClick={(e) => HandleClick(e)}>
            <div>
                <div key={data.id} className="users">
                    <img
                        className="avatar"
                        src={data.avatar}
                        alt={data.username}
                        width="100rem"
                    />
                    <div className="username">{data.username}</div>
                </div>
            </div>
        </div>
    );
}
