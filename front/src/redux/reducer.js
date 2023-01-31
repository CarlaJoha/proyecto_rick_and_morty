import { ADD_FAVORITE } from "./action-types";
import { DELETE_FAVORITE } from "./action-types";


const initialState = {
    myFavorites :[]
}

const reducer = (state = initialState, action ) => {
//caso que me permita agregar el personaje que recibo por paylod a el estado favorites
    switch (action.type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]//para que no pise la la info que ya tengo, hago una copis y concateno el action.paylod
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter( char => char.id !== action.payload )
            }//este filter toma TODOS los personajes MENOS el que pasan por payload
        
        default:
            return {...state};
    }
}

export default reducer;