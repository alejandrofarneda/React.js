import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);

    const handleFiles = (e) => {
        if (!e.target.files) return;
        const r = Array.from(e.target.files); //debemos convertir en Array a Files ya que no lo es del todo.
        setFiles([...files, ...r]); //primero seteamos un array de imagenes para tenerlos almacenados en memoria
        setPreviews([...previews, ...r.map((f) => URL.createObjectURL(f))]); //creamos un archivo url de cada imagen ya que de lo contrario no poderiamos mostrarla como foto
        e.target.value = null; //Seteamos a null el value del input para poder seleccionar dos veces una misma imagen
    };

    const handleClick = (i) => {
        setFiles(files.filter((_, j) => i !== j)); //cada que clickeamos una foto, tomamos el valor del indice dentro del array Files y si coincide con el indice del elemento que queremos eliminar... no lo dejamos pasar con el filter
        setPreviews(previews.filter((_, j) => i !== j)); //cada que clickeamos una foto, tomamos el valor del indice dentro del array Previews y si coincide con el indice de la foto que queremos eliminar... no la dejamos pasar con el filter
    };

    return (
        <form className="gallery">
            <h1>Gallery</h1>
            <div className="gallery-list">
                {previews &&
                    previews.map((e, i) => (
                        <div
                            key={i}
                            className="image"
                            style={{ backgroundImage: `url(${e})` }}
                            onClick={() => handleClick(i)}
                        />
                    ))}
                <label>
                    <div
                        className="image-add"
                        style={{
                            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Fairytale_button_add.svg/64px-Fairytale_button_add.svg.png)`,
                        }}
                    />

                    <input type="file" onChange={handleFiles} multiple />
                </label>
            </div>
        </form>
    );
}

export default Gallery;
