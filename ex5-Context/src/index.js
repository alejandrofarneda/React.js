import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContentProvider from './CartContent';
import ErrorBoundary from './ErrorBoundary';

const Error = () => {
    return (
        <div>
            se ha producido un error.
            <button onClick={()=> window.location.reload() }>Reload</button>

         
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <CartContentProvider>
            <ErrorBoundary fallback={<Error/>}>
                <App />
            </ErrorBoundary>
        </CartContentProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
