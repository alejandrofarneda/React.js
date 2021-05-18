import Navbar from './Navbar';
import Featured from './Featured';
import Modal from './Modal';
import './Netflix.css';
import data from './netflix.json'
import SeriesList from './SeriesList';

function Netflix() {

  return (
    <div className="netflix">
      <Navbar user={data.user} />
      <Featured featured={data.featured} />
      <SeriesList title="Estrenos" entries={data.premiere} />
      <SeriesList title="Tendencias ahora" entries={data.trending} />
      <Modal>
        <h1>Inicia sesión</h1>
        <div>Nombre de usuario:</div>
        <div>Contraseña:</div>
      </Modal>
    </div>
  );
}

export default Netflix;
