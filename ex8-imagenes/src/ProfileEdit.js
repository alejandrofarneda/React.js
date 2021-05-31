import React, { useState } from 'react';

function ProfileEdit() {
    const defaultimage = 'https://i.imgur.com/CevZ3gf.jpg';
    const [title, setTitle] = useState();
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(defaultimage);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('title', title);
        fd.append('avatar', file);
        const ret = await fetch('http://telegram-api.trek-quest.com/avatar', {
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
        const f = e.target.files[0];
        setFile(f);
        setPreview(f ? URL.createObjectURL(f) : defaultimage);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Subir imagen</h1>
            <label>
                {preview && (
                    <div
                        className="preview"
                        style={{ backgroundImage: `url(${preview})` }}
                    />
                )}

                <input type="file" onChange={handleFile} />
            </label>
            <label>
                Titulo:
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <button>Enviar</button>
        </form>
    );
}

export default ProfileEdit;
