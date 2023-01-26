const axios = require('axios');

//CONTROLADOR: maneja la lógica, envía la response a la route(server)
//este controlador le hace una petición de info a la API, la respuesta a esta petición la recibe el server.js la trabaja según la PROMESA, hace lo que pidamos y por último responde enviando la infor trabajada como RESOLVE o como REJECT

const getCharById = (response, id) => {//por parámetro Objeto respoonse y el id
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)//recibo la data(respuesta de la api)
    .then(data => {//creo un objeto que llamo character
        let character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }//devolver una respuesta con status 200 y el parseo del objeto creado
        response.writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))//envío info parseada
    })
    .catch(error => 
        response.writeHead(500, {"Content-type": "text/plain"})
        .end(error.message)//o un mensaje `El personaje ${id} no fue encontrado`
    )
}

module.exports = getCharById;


/*
1. GET Search
Dirígete a tu carpeta controllers y crea un archivo llamado getCharById.js. Dentro de este archivo deberás:

Declarar una variable con el nombre "getCharById" y exportarla. Esta variable será una función que recibe dos parámetros: res y id.

Dentro de la función deberás hacer una petición (código asincrónico) a la URL https://rickandmortyapi.com/api/character/. Debes utilizar promesas para realizar esto. Recuerda que debes agregar el ID recibido por parámetro al final de esta URL.

Una vez que tienes la respuesta de la petición, crea un objeto en el que guardarás las propidades image, name, gender y species que recibiste como respuesta (todos los datos de la petición se encuentran dentro de una propiedad llamada data).

Una vez creado el objeto, deberás devolver una respuesta con status 200, un Content-Type igual a application/json, y finalmente responde el objeto que creaste convertido en JSON:

res.end(JSON.stringify(objeto));
En el caso de que la promesa tenga algún fallo es importante que concatenes un .catch al final de la promesa para poder manejar el error. Dentro del catch deberás devolver una respuesta con status 500, un Content-Type igual a text/plain, y finalmente responde con la propiedad message del error.

*/