import './App.css';
import Cart from './Cart';
import ErrorBoundary from './ErrorBoundary';
import Products from './Products';

function App() {
  return (
      <div className="App">
          <header className="header">MyShop</header>
          <main className="main">
              <ErrorBoundary fallback={'No se han podido cargar los productos'}>
              
                  <Products />
              </ErrorBoundary>
          </main>
          <aside className="aside">
              <Cart />
          </aside>
      </div>
  );
}

export default App;
