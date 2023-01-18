import React from 'react';
import style from './Card.module.css';
import {Link } from "react-router-dom"

//COMPONENTE DUMB
export default function Card({ name, species, gender, image, onClose, id }) {

   return (
      <div className={style.cardContainer} >
         <article className={style.article}>
            <button className={style.cardButton} onClick={onClose}>X</button>
           
            <img className={style.cardImage} src={image} alt={name} />
           
            <div className={style.cardInfo} >
              <div className={style.info}>
                  <Link to={`/detail/${id}`}>{name}</Link>
                  <p>Specie: {species}</p>
                  <p>gender: {gender}</p>
               </div>
            </div>
         </article>
      </div>
   );
}
//Acá CARD llama a la función onCLOSE dentro del EVENTO onClick  que elimina la Card al hacer Click en el boton
//envolvemos el nombre del personaje con un LINK
//me traigo el ID desde Cards que es el Padre, para poder usarla