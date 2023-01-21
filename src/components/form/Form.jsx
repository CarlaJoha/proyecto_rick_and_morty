import style from './Form.module.css';
import { useState } from 'react';
import React from 'react';
import validation from "./validation"

const Form = () => {

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({ 
        username: '', 
        password: '' 
    });


    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <form className={style.formContainer}>
            <label className={style.label} htmlFor="username">Username:</label>
            <input className={style.input} type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="morty_smith@email.com"/>
            {errors.username && <p className={style.errors}>{errors.username}</p>}

            <label className={style.label} htmlFor="password">Password:</label>
            <input className={style.input} type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="escribe tu password" />
            {errors.password && <p className={style.errors}>{errors.password}</p>}

            <button className={style.button}>LOGIN</button>
        </form>
    )
}

export default Form;

/*
24. para controlar el fomulario, creo un estado local y lo bindeo, agregando una propiedad value a los inputs del form
la propiedad value, la defino con el nombre que le di al estado y el name del input 
25. Para guardar la info del usuario, uso el evento OnChange en ambos inputs, también creo la función handleInputchange para que esté atenta al evento del input, y al suceder un evento modifique el estado local
26. creo un estado para encontrat los errores en el formulario
27. Creo un archivo dentro de la carpeta del componente Form para la VALIDACION
34. importo validation
35. En el handleInputChange, seteo también el estado del usuario y le paso todo lo que suceda en tiempo "real" con el input para emitir los mensaje de errores o no
36.dentro del seteo del estado del userData llamo a validation le paso un objeto que tenga una copia del estado usuario y el seteo de la propiedad name del input, segun el value ingresado
37. El estado errors, lo rederizo con un condicional(&&)
*/