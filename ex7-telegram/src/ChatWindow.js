import { useState } from 'react';
import { useUser } from './UserContext';

export default function ChatWindow({ message }) {
    const [text, setText] = useState();
    const user = useUser();
    
        async function HandleSubmit(e) {
            e.preventDefault();

            try {
                const res = await fetch(
                    'http://telegram-api.trek-quest.com/chats/' +
                        message.user.id,
                    {
                        method: 'POST',
                        body: JSON.stringify( text ),
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + user.token,
                        },
                    }
                );
                
                console.log(await res.json());
                setText('')
                
                    
                
            } catch (error) {
                alert(error);
            }
        }
   

    return (
        <div>
            <div className="message-in">
                <div className='message-in-in'>
                    {message &&
                        message.messages.map((e, i) => <div key={i}>{e}</div>)}
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
