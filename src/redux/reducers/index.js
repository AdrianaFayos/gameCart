import { combineReducers } from "redux";
import credentials from './credentials-reducer';
import cart from './cart-reducer';

const rootReducer = combineReducers ({

    // aquí importaremos todos los reducers:
    credentials,
    cart
    
});

export default rootReducer;