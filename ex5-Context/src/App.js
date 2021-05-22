import './App.css';
import Cart from './Cart';
import Products from './Products';

function App() {
  return (
      <div className="App">
          <header className="header">
              MyShop
          </header>
          <main className="main">
              <Products />
          </main>
          <aside className="aside">
              <Cart />
          </aside>
      </div>
  );
}

export default App;
