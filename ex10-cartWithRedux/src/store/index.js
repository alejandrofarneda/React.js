import { combineReducers, createStore } from 'redux';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'BUY':
            if (state.some((e) => e.id === action.data.id)) {
                //vemos que action es "data" que hemos pasado como parametro en Product
                return state.map((e) =>
                    e.id === action.data.id
                        ? { ...e, cantidad: e.cantidad + 1 }
                        : e
                );
            } else {
                return [...state, { ...action.data, cantidad: 1 }];
            }

        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        cart: cartReducer,
    })
);

export default store;
