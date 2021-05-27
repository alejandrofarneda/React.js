import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from './UserContext';
import './ChatList.css';

export default function ChatWindow() {
    const [text, setText] = useState();
    const user = useUser();
    const [incoming, setIncoming] = useState();
    const { id } = useParams();
    const [message, setMessage] = useState()

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
            const mensaje = await res.json();
            console.log(mensaje);
            setText('');
        } catch (error) {
            alert(error);
        }
        try {
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
        } catch (error) {}
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
        getChat()

        setIncoming(message);
    }, [id]);
    return (
        <div className="chat-window">
            <div className="message-in">
                <div className="message-in-in">
                    {incoming && (
                        <>
                            <div>To: {incoming.user.username}</div>
                            {incoming.messages.map((e, i) => (
                                <div className="individual">
                                    <div
                                        className={
                                            e.src === user.id
                                                ? 'individual-out'
                                                : 'individual-in'
                                        }
                                        key={i}
                                    >
                                        {e.message}
                                    </div>
                                    <div className="date">
                                        🕛 {e.date.slice(11, 16)}
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
                        placeholder="Escribe tu mensaje"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
}
