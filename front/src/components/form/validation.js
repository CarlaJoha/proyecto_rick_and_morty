
const validation = (userData) => {
    let errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){//si No es un email, creo una propiedad
        errors.username = "Escriba un email válido";
    }
    if(!userData.username){//si no hay nada en username
        errors.username = "Este campo no puede estar vacío";
    }
    if(userData.username.length > 35){
        errors.username = "Username demasiado largo, max. 35 carácteres"
    }
    if(!userData.password.match(/\d/)){//si ingresa un numero dará true
        errors.password = "La contraseña debe contener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10 ){//si ingresa un numero dará true
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }
    return errors;
}

export default validation;

/*29.Esta función validará:
    1. Que el username sea un email (validaciones REGEX /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    2. que el username, no esté vacío
    3. que el username no contenga más de 35 caracteres
//30. si voy a estar validando esta input, por parámetro coloco el input, asi que agrego el parámetro userData que es el nombre de mi estado en Form
//31. Creo una Variable que a a ser un objeto donde guardaré todos los errores, en caso de que sucedan
//32. del password validar:
    1.la contraseña tiene que tener al menos un número.
    match es un método booleano de string, que compara(machea) con lo que le colocamos que machee está regex(/\d/) testea si el string contiene números
    2. la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
//33. RETORNO ERRORS  e importo validation en el componente Form
*/
