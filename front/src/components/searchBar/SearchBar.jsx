import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({characters, onSearch}) {
 //el estado interno es el que escribe el usuario en el input EL VALUE
 //agrego comillas al useState porque recibe un input text(string)
 const [character, setCharacter] = useState('')
//  const [inputRepetido, setInput] = useState('')

   const handleChange = (event) => {
       setCharacter(event.target.value)
      // const inputRepetido = characters.find((element) => element === event.target.value);
      //    inputRepetido(event)
      //    if(!inputRepetido) { 
      //       setCharacter(event.target.value)
      //    } else {
      //       alert("No se pueden mostar personajes repetidos")
      //    }
      }//el estado va a ser lo que sea que escriba el usuario
 

   return (
      <div className={style.div}>
         <input className={style.input} type='search' value={character} onChange={handleChange} />
         <button className={style.buttonInput} onClick={ () => onSearch(character) }>AGREGAR</button>
         <button className={style.buttonInput} >RANDOM</button>
      </div>
   );
}


//Este componente ya está configurado para recibir onSearch
//al darle click al botón agregar se ejecuta onSearch
//LOS EVENTOS SE DISPARAN HACIA ARRIBA
//7. se modifica searchBar para que mantenga un estado interno del nombre del personaje
//8. creo una propiedad value de character
//9. creo un evento ONCHANGE para que dispare un evento cada vez que el usuario haga un cambio en en el input
//10 el onChange necesita un HANDLE que se encargue de modificar el estado cada vez que el usuario haga un cambio
//11. Le digo al ONCHANGE que ejecute la función HANDLECHANGE en el input
//No hago una copia del character porque solo me interesa lo que se escribe al momento
//12. Le paso character por parámetro a onSearch en el SUBMIT(boton) para que utilice el estado con el input ingresado por el usuario, así el valor llega a la función Onsearch que está en App
//13. Voy a APP y agrego character como parámetro en la función onSearch


// how to prevent the input from accepting two same id to display with this function  ?  