import { applyMiddleware, combineReducers, createStore } from 'redux';

const userReducer = (state = null, action) => {
    // recibo un estado y una accion... si la accion no me interesa, el state continúa igual,
    // si la accion me interesa entonces se cambia el state
    switch (
        action.type //action puede ser lo que queramos pero se recomienda que sea un objeto con un campo type que indica el tipo de accion
    ) {
        case 'LOGIN': //un case para cada caso...
            return action.user; //si el case es Login entonces el estado pasa a ser el usuario que viene en el propio action
        case 'LOGOUT':
            return null; //si el case es logout el estado se borra a null, ya no tenemos usuario.
        default:
            return state; //de lo contrario nada, state sigue siendo igual
    }
};
const historyReducer = (state = [], action) => {
    //reducer que guarda las ultimas busquedas de personajes y las mete en un array
    switch (action.type) {
        case 'SEARCH':
            return [action.char, ...state].slice(0, 5); //cada vez que busquemos algo se agrega al array vacío principalmente, y que el array se corte en 5 elementos

        default:
            return state; //de lo contrario devuelve el array original
    }
};

const localStorageMiddleware = (store) => (next) => (action) => {
    let result = next(action); //Este middleware es complejo, basicamente nos lleva por callbacks hasta poder setear el usuario dentro del
    localStorage.setItem('session', JSON.stringify(store.getState())); //session en localStorage https://es.redux.js.org/docs/avanzado/middleware.html
    return result; //buscar la fucnion logger denrto de esa pagina.
};

const store = createStore(
    combineReducers({
        //Combine reducers recibe un OBJETO en el cual le pasamos como key el nombre para una seccion del store y como VALOR su reducer

        user: userReducer,
        // cart: cartReducer => aqui vemos como combineReducers coge varios reducers que cada uno lidia con sus actions y los combina a todos

        history: historyReducer,
    }),
    JSON.parse(localStorage.getItem('session')) || {},
    applyMiddleware(localStorageMiddleware) //Seteamos el usuario en localStorage, y si no lo hay entocnes que sea un objeto vacío porque al recibir null, explota.
    //a continuacion nuestro middleware que se encarga de setear el local con el usuario que se ha conectado si lo hubiera. y toda la
    //info que venga en history, y si hubiera mas reducers, tambien lo guardaria. y es entonces cuando utilizamos el
    // const recent = useSelector(s => s.history), clarito que useSelector me permite indagar dentro de cualquier propiedad que contengan
    //los reducers.
);

export default store;
