import './App.css'
import Cards from './components/cards/Cards.jsx'
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Footer from "./components/footer/Footer"
import { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom'


function App () {
//STATE PARA AGREGAR EL ARRAY DE PERSONAJES
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {  
       if (data.name) {
          setCharacters((oldChars) => [data, ...oldChars]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
       console.log(data);
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
    
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route path="home" element={<Cards onClose={onClose} characters={characters} /> } />
        <Route path="about" element={<About /> } />
        <Route path="detail/:detailId" element={<Detail />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
//1. Creo el estado
//2. Creo función OnSeacrh
//3. Renderizo la función onSearch en el componente NavBar
//4. Voy a NavBar y agrego onSearch como props
//14.Agrego character como parámetro en la función onSearch
//15.Agrego el fetch en la función OnSearh
/*16. PARAR CERRAR EL CARD, CERRAR  el PERSONAJE POR ID defino la función onClose en App, le paso por parámetro el ID de CHARACTERS y esta función hace un método filter por id*/
//Ya cree la ruta a about, a home y a detail/:detailId
//Cuando se hace Click sobre el nombre de la card este redirige a la ruta ID del personaje.
//17.Para crear la ruta del componente del personaje, hay que crear el componente que muestra toda la info del personaje
//18.Para eso importo Los Hooks useState desde react y useParams desde react-router-dom en el componente Detail
//detailId es el nombre de la propiedad que va a tener el valor de lo que coloque el usuario