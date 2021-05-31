import { useState } from 'react';
import { useUser } from './UserContext';
import './App.css';

export default function ChangeAvatar() {
    const user = useUser();
    const [title, setTitle] = useState();
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(user.avatar);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', title);
        fd.append('image', file);
        const ret = await fetch('http://photochat.trek-quest.com/image', {
            method: 'POST',
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.MQS2011tQOE6dkDN7RUK5gxpyiXdmvEVRPQjOwByzuAxA',
            },
            body: fd,
        });
        console.log('Status:', ret.status);
        const data = await ret.json();
        console.log('Data:', data);
    };

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        setTitle('');

        setPreview(e.target.files[0] ? url : 'https://i.imgur.com/CevZ3gf.jpg');
    };

    return (
        <div className="change-avatar">
            <div className="form">
                <h1>Cambia tu foto</h1>

                <div
                    className="preview"
                    style={preview && { backgroundImage: `url(${preview})` }}
                />

                <form onSubmit={handleSubmit}>
                    <label>
                        Titulo:
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>

                    <label>
                        Imagen:
                        <input type="file" onChange={handleFile} />
                    </label>

                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
}
