import {LOGIN, LOGOUT, UPDATE_USER} from '../types';

const initialState = {
    user : {},
    token : ''
};

const credentialsReducer = (state = initialState, action) => {

    switch(action.type){
        //ejemplo de añadido de datos
        case LOGIN :
            return action.payload;

        // ejemplo de restablecimiento o borrado de datos    
        case LOGOUT :
            return initialState;

        //ejemplo de modificacion de datos    
        case UPDATE_USER : 
            return {...state, user: action.payload}
                 

        default:
            return state
    }


}

export default credentialsReducer;