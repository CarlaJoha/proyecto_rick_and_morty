import style from "./Favorites.module.css"; 
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Favorites = () => {

    //Puede ser const myFavorites = useSelector((state) => state.myFavorites);
    //cuandp hago destructuring, no tengo que especificar en el estado con quien me estoy quedando del global
    const { myFavorites } = useSelector((state) => state);

    return(
      <div className={style.cardContainer}>
         {
            myFavorites.map((character) => {
               return (
                  <div>
                     <article className={style.article}>
                              
                        <img className={style.cardImage} src={character.image} alt={character.name} />
                        
                        <div className={style.cardInfo} >
                           <div className={style.info}>
                              <Link to={`/detail/${character.id}`}>{character.name}</Link>
                              <p>Specie: {character.species}</p>
                              <p>Gender: {character.gender}</p>
                           </div>
                        </div>
                     </article>
                  </div>
               )
            })
         }  
      </div>
    )


}




export default Favorites;
/*
44.
1. Cree este componente, y cree una ruta en APP.js para mostrar el componente /favorites
2. también un botón en el navBar que me dirija a la ruta
3. Además un botón que me devuelva a home
46. Para TRAER EL ESTADO GLOBAL myFavorites a este componente:
    * importo useSelector
    * como el estado global es un objeto, puedo hacerlo con destructuring

47. Tengo que mappear (recorrerlo) y re-renderizar un `<div>` con información del personaje.
   *el div para renderizar lo tomé en su mayoría del Componente Card, al igual que los estilos, ajusté el acceso a las propiedades, ya que character no está con destructuring. Borré la función onCLose y los botones
   importe { Link } para poder usar el link a Detail
*/