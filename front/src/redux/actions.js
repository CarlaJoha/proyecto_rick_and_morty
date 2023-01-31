import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

export const addFavorite = (character) => {
    //recibo al personaje por parámetro, el payload es por donde viaja para que después el reducer lo pueda agregar al objeto global
    return { type: ADD_FAVORITE, payload: character }
}

export const deleteFavorite = (id) => {
    //recibo al personaje por parámetro, el payload es por donde viaja para que después el reducer lo pueda eliminar al objeto global
    return { type: DELETE_FAVORITE, payload: id }
}