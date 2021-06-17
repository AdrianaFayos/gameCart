import {ADD_CART, REMOVE_CART, EMPTY_CART, EDIT_CART} from '../types';

const initialState = {
    products: [],
    quantity: 0
};

const cartReducer = (state = initialState, action) => {

    switch(action.type){

        case ADD_CART :
            return {...state,  products: [...state.products, action.payload]}

        case REMOVE_CART :

        case EDIT_CART :
            let nuevoCarrito = state.products.map( (item) => {
                
                if (item.nombre === action.payload.nombre) { // si ya existe
                    item.cantidad = action.payload.cantidad; // lo modifico
                };
                
                return item;
            });
            
            return {
                ...state,
                products: nuevoCarrito
            };

  
        case EMPTY_CART : 
             return initialState;
                 

        default:
            return state
    }


}

export default cartReducer;