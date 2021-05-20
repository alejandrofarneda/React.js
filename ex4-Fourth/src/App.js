
import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import Mount from './Mount';
import Timer from './Timer';
import WindowSize from './WindowSize';

function App() {
  const [power, setPower] = useState(false)
  return (
    <div className="App">
      <label>
        <input type='checkbox' checked={power} onChange={e=> setPower(e.target.checked)}/>
      </label>
      {power && <Mount className='mount'/>}
      {power && <Modal/>}
      {power && <Timer/>}
      <WindowSize/>

      
    </div>
  );
}

export default App;
