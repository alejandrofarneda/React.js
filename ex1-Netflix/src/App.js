import './App.css';
import Chats from './Chats';
import Hotels from './Hotels';
import Netflix from './Netflix/Netflix';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Netflix />
                <Hotels />
                <Chats />
            </header>
        </div>
    );
}

export default App;
