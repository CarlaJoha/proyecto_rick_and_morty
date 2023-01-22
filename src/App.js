import './App.css'
import Cards from './components/cards/Cards.jsx'
import NavBar from './components/navBar/NavBar'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Footer from "./components/footer/Footer"
import { useState } from 'react'; 
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function App () {
//STATE PARA AGREGAR EL ARRAY DE PERSONAJES
  const [characters, setCharacters] = useState([]);
  const   location = useLocation();//useLocation, retorna un objeto con propiedades una de ellas pathname, me sirve para hacer un renderizado condicional
  const [ access, setAccess ] = useState(false);
  const username = "carlajoha.work@gmail.com";
  const password =  "*123";
  const navigate = useNavigate();

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  //si access useState está en false, en el useEffect será un true y redigirá a la ruta principal (localHost3000) 
  useEffect(() => {
    !access && navigate('/');
 }, [access]);


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
      {location.pathname === "/" ? <Form login={login} /> :  <NavBar onSearch={onSearch} />}
     
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
/*
1. Creo el estado
2. Creo función OnSeacrh
3. Renderizo la función onSearch en el componente NavBar
4. Voy a NavBar y agrego onSearch como props
14.Agrego character como parámetro en la función onSearch
15.Agrego el fetch en la función OnSearh
16. PARAR CERRAR EL CARD, CERRAR  el PERSONAJE POR ID defino la función onClose en App, le paso por parámetro el ID de CHARACTERS y esta función hace un método filter por id
Ya cree la ruta a about, a home y a detail/:detailId
Cuando se hace Click sobre el nombre de la card este redirige a la ruta ID del personaje.
17.Para crear la ruta del componente del personaje, hay que crear el componente que muestra toda la info del personaje
/18.Para eso importo Los Hooks useState desde react y useParams desde react-router-dom en el componente Detail
detailId es el nombre de la propiedad que va a tener el valor de lo que coloque el usuario
23.Para que el routa del Form no se muestre el NavBar, hago un renderizado condicional USELOCATION:
lo importo, lo declaro en una constante(location)
renderizo el condicional, si el pathname es igual a "/" que me muestre el componente Form, si no es "/ qu emuestre NavBar"
38. Para simular la base de datos(con el username, y el password), para comparar la info, y si coincide, podrá usar la aplicación 
para eso creo:
  --> un estado local que llamo access, lo inicializo en falso
  --> una variable llamada username
  --> una variable llamada password
  --> creo una función con el nombre login, que recibe userData por parámetro. UserData está en el Componente Form, en algún momento debeo pasarle esta función a Form y Form le pasará a UserData
  La función login validará si el username y password que declaraste más arriba son iguales a los que les está llegando por parámetro. En caso afirmativo, el estado local access ahora será `true`.
 SIMULACIÓN DE SEGURIDAD: 
39. importo el hook useNavigate, lo meto en un avariable y hago que redirija a "/home" si la información es correcta
Además agrego un useEffect para que si access useState está en false, en el useEffect será un true y redigirá siempre a la ruta principal (localHost3000)
En caso de que la función login se ejecute, useEffect no se va a ejecutar
40. Le paso por props la función login al componente Form
41. Voy al Componente Form y recibo la función login por pros

*/