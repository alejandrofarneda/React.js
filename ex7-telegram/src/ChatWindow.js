import { useEffect, useState } from 'react';
import { useUser } from './UserContext';

export default function ChatWindow({ mesage, setMessage }) {
    const [text, setText] = useState();
    const user = useUser();
    const [incoming, setIncoming] = useState()

    async function HandleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch(
                'http://telegram-api.trek-quest.com/chats/' + mesage.user.id,
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
                'http://telegram-api.trek-quest.com/chats/' + mesage.user.id,
                {
                    headers: {
                        Authorization: 'Bearer ' + user.token,
                    },
                }
            );
           const mensajes = await res.json();
           setMessage(mensajes);
           
            
        } catch (error) {
            
        }
    }    

    useEffect(()=>{
        setIncoming(mesage);
    }, [mesage])

    return (
        <div>
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
