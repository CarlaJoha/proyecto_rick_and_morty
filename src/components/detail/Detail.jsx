import style from './Detail.module.css'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Detail = () => {
//19. obtener el Id del personaje mediante useParams, esto permite el path detail/id en el borwser
const { detailId } = useParams();

//20.crear un estado local con el nombre character, su estado inicial es un objeto
const [character, setCharacter] = useState({});

//21.importo el hook UseEffect
useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);//acá guardo la info que me estoy trayendo en el estado character
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

    return(
        <span className={style.container}>
            <img src={character?.image} alt={character?.name} style={ {borderRadius: '99999rem'} }></img>
            <h2 className={style.h2}>{character?.name}</h2> 
            <p>Status: {character?.status}</p>
            <p>Species: {character?.species}</p>
            <p>Gender: {character?.gender}</p>
            <p>Origin: {character?.origin?.name}</p>
            <p>Location: {character?.location?.name}</p>
            <button className={style.button}>
              <Link to="/home" >Home</Link>              
            </button>
        </span>
    )
}

export default Detail;



//21. Creo el USEEFFECT que simula los ciclos de vida: Este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.
//Useffect traerá la ruta de UN PERSONAJE EN ESPECIFICO
//setCharacter(char) lin:19 cambia el estado y guarda a chart(la info, la data) en character. Ya está la info guardada en character.
//Ahora en el estado local **character** está toda la información del personaje disponible para renderizarla en este componente (`<Detail />`)

//22. Me traigo la info según su propiedad