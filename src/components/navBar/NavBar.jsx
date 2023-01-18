import SearchBar from "../searchBar/SearchBar"
import style from './NavBar.module.css'
import logo from '../../assets/image/logo.png'
// import { Routes, Route } from "react-router-dom"
import {Link } from "react-router-dom"


function NavBar ({ onSearch }) {
    return(
        <nav style={style.nav}>
            <Link to= "home">
            <img src={logo} className={style.logo} alt="logo"/>
            </Link>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
            <div className={style.links}>
                <Link to="about">ABOUT</Link>
                <Link to="home">HOME</Link>
            </div>
        </nav>
    )
}

export default NavBar;

//5. Agrego onSearch como props
//6. ejecuto onSearch en el componente SearchBar dentro de NavBar(acá)