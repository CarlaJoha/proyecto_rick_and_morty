const axios = require('axios');

//CONTROLADOR: maneja la lógica, envía la response a la route(server)
//este controlador le hace una petición de info a la API, la respuesta a esta petición la recibe el server.js la trabaja según la PROMESA, hace lo que pidamos y por último responde enviando la info trabajada como RESOLVE o como REJECT

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
1. 

*/