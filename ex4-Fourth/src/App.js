
import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import Modal from './Modal';
import Mount from './Mount';
import NewHook from './NewHook';
import OnScroll from './onScroll';
import Search from './Search';
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
      {power && <WindowSize/>}
      {power && <OnScroll/>}
      {power && <Search/>}
      {power && <Clock/>}
      <NewHook/>



      
    </div>
  );
}

export default App;
