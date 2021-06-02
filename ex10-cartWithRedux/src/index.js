import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import store from './store/index';
import { IntlProvider } from 'react-intl';
import es from './locale/es.json';
import en from './locale/en.json';
const Error = () => {
    return (
        <div>
            Se ha producido un error.
            <button onClick={() => window.location.reload()}>Reload</button>
        </div>
    );
};
const allMessages = { es, en };

const AwesomIntl = ({ children }) => {
    //Esta es la funcion que me permite cambiar de idioma automaticamente
    const [locale, setLocale] = useState(navigator.language.split('-')[0]); //cojo el idioma desde navigator y genero un array de strings divididos por el guion, de donde tomo el primer elemento que seria en este caso "es"
    return (
        <IntlProvider
            messages={allMessages[locale]}
            locale={locale}
            defaultLocale="es"
        >
            <select
                style={{
                    position: 'fixed',
                    display: 'inline-block',
                    right: '2rem',
                    top: '1rem',
                    width: '4rem',
                    height: '2rem',
                    fontSize: '1.5rem',
                }}
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
            >
                {Object.keys(allMessages).map((t) => (
                    <option>{t}</option>
                ))}
            </select>
            {children}
        </IntlProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AwesomIntl>
                <ErrorBoundary fallback={<Error />}>
                    <App />
                </ErrorBoundary>
            </AwesomIntl>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
