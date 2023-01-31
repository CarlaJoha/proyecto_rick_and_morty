import React from 'react';
import style from './Card.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from "../../redux/actions"

//COMPONENTE DUMB
export default function Card({ name, species, gender, image, onClose, id }) {
   const dispatch = useDispatch();
   const [ isFav, setIsFav ] = useState(false);
   const myFavorites = useSelector( state => state.myFavorites);
   
   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         dispatch(deleteFavorite())
      } else {
         setIsFav(true);
         dispatch(addFavorite({ name, species, gender, image, onClose, id }))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.cardContainer} >
           
         <article className={style.article}>
                              
            <img className={style.cardImage} src={image} alt={name} />
           
            <div className={style.cardInfo} >
               <div className={style.info}>
                  <Link to={`/detail/${id}`}>{name}</Link>
                  <p>Specie: {species}</p>
                  <p>Gender: {gender}</p>
                  {
                     isFav ? (
                        <button className={style.heartButton} onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button className={style.heartButton} onClick={handleFavorite}>🤍</button>
                     )
                  }

                  <button className={style.cardButton} onClick={onClose}>X</button>
               </div>
            </div>

         </article>
      </div>
   );
}

/*Acá CARD llama a la función onCLOSE dentro del EVENTO onClick  que elimina la Card al hacer Click en el boton
envolvemos el nombre del personaje con un LINK
me traigo el ID desde Cards que es el Padre, para poder usarla
* Se Agrega un BOTON, y usar hook, para manejar el botón, 
* importo useDispatch de react-redux, dentro del componente, Creo la constante dispatch y la igualo a useDispatch() 
* realizo dos funciones:
   1. Para AGREGAR UN PERSONAJE FAVORITO
   2. Otra para ELIMINAR UN PERSONAJE
   HAY QUE IMPORTAR LAS ACTIONS CREADAS, importo useDispatch de react-redux
* Creo un ESTADO LOCAL, que reciba las funciones dispach por props. IsFav, estado inicial(false)
   importo useState from react
* Creo una función handleFavorite en el cuerpo de componente, estará dividida en dos partes:
   1. si el estado isFav es true setteará el estado en false y despacha la función deleteFavorite que recibe por props, pasándole el id del character por parámetro
      - uso dispatch dentro de HandlerFavorite para despachar deletFavorite(id) pasandole id
* else, si el estado está en false, settear el estado a true y despacho addFavorite(), nole pasamos props porque se hizo destructuring, así que copio y pego el destructuring

   PARA CREAR UN RENDERIZADO CONDICIONAL
* Si EL estado local `isFav` es true, entonces se mostrará un botón. Si es false, se mostrará otro botón.
* agrego condicional ternario en el renderizado html, con los dos botones, con su evento onClick y la función handlerFavorite  sin ejecutar
   se pregunta si isFav es true que ejecute a handleFavorite con corazón rojo, si es false, la ejecuta con el corazón blanco

PARA ASEGURAR QUE EL STATUS DEL ESTADO LOCAL SE MANTENGA, aunque entremos y salgamos del componente
   * Uso el Hook UseSelector: el useSelector recibe automáticamente el estado global y le digo que del global, solo quiero el estado de myFavorites y lo guardo en la constante myFavorites
   * importo USEEFFECT
   * El useEFFECT comprobará si el personaje que contiene esta `Card` ya está dentro de tus favoritos. En ese caso setteará el estado **isFav** en true.
   */