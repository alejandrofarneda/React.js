import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from './UserContext';
import './ChatList.css';

export default function ChatWindow() {
    const [text, setText] = useState();
    const user = useUser();
    const { id } = useParams();
    const [message, setMessage] = useState();
    const [onOff, setOnOff] = useState();

    async function HandleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch(
                'http://telegram-api.trek-quest.com/chats/' + id,
                {
                    method: 'POST',
                    body: JSON.stringify({ message: text }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + user.token,
                    },
                }
            );
            const msje = await res.json();
            setText('');
            setOnOff(msje);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        const getChat = async () => {
            const res = await fetch(
                'http://telegram-api.trek-quest.com/chats/' + id,
                {
                    headers: {
                        Authorization: 'Bearer ' + user.token,
                    },
                }
            );
            const mensajes = await res.json();
            setMessage(mensajes);
        };
        getChat();
    }, [id, onOff, user]);

    return (
        <div className="chat-window">
            <div>
                <div className="message-in">
                    {message && (
                        <>
                            <div className="to">
                                To: {message.user.username}
                            </div>
                            {message.messages.map((e, i) => (
                                <div key={i} className="individual">
                                    <div
                                        key={e.src}
                                        className={
                                            e.src === user.id
                                                ? 'individual-out'
                                                : 'individual-in'
                                        }
                                    >
                                        <div> {e.message}</div>

                                        <span className="date">
                                            🕛{e.date.slice(11, 16)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="message-out">
                <form onSubmit={HandleSubmit} className="message-out-form">
                    <textarea
                        className="text-area"
                        placeholder="Write..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
}
