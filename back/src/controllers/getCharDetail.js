const axios = require('axios');


const getCharById = (response, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    .then(data => {
        let character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin.name
        }
        response
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch(error => {
        response
        .writeHead(500, {"Content-type": "text/plain"})
        .end(`El personaje ${id} no fue encontrado`)
    })
}

module.exports = getCharById;




/*
3. GET Detail
Ahora crearemos la ruta para obtener el detalle de un personaje.

Dirígete a tu carpeta controllers y crea un archivo llamado getCharDetail.js. Dentro de este archivo deberás:

Declarar una variable con el nombre "getCharDetail" y exportarla. Esta variable será una función que recibe dos parámetros: res y id.

El resto de la lógica de esta función es exactamente igual al ejercicio anterior, con la diferencia que esta vez debes obtener todas estas propiedades del personaje: image, name, gender, status, origin y species.

En tu archivo server.js tienes que:

Importar el nuevo controlador.

Crear un condicional que verifique si la URL recibida incluye el string "detail". En el caso de que esto sea verdadero tendrás que obtener el ID que recibes al final de la URL, y ejecutar este controlador pasándole como parámetros: res y ID.
 */