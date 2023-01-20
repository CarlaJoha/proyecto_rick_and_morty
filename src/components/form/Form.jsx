import style from './Form.module.css';
import { useState } from 'react';
import React from 'react';

const Form = () => {

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form className={style.formContainer}>
            <label className={style.label} htmlFor="username">Username:</label>
            <input className={style.input} type="text" name="username" value={userData.username} onchange={handleInputChange} />

            <label className={style.label} htmlFor="password">Password:</label>
            <input className={style.input} type="password" name="password" value={userData.username} onchange={handleInputChange} />

            <button className={style.button}>LOGIN</button>
        </form>
    )
}

export default Form;

//24. para controlar el fomulario, creo un estado local y lo bindeo, agregando una propiedad value a los inputs del form
//la propiedad value, la defino con el nombre que le di al estado y el name del input 
//25. Para guardar la info del usuario, uso el evento OnChange en ambos inputs, también creo la función handleInputchange para que esté atenta al evento del input, y al suceder un evento modifique el estado local