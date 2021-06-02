import './App.css';
import Cart from './Cart';
import ErrorBoundary from './ErrorBoundary';
import Products from './Products';
import Helmet from 'react-helmet';

function App() {
    //con Helmet podemos cambiar los elementos del header y sus valores, como por ejemplo en este caso el titulo.
    return (
        <div className="App">
            <Helmet>
                <title>Shoping Web!</title>
            </Helmet>
            <header className="header">
                <p onClick={() => window.location.reload()}>MyShop</p>
            </header>
            <main className="main">
                <ErrorBoundary
                    fallback={'No se han podido cargar los productos'}
                >
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
