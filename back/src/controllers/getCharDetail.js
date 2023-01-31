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

*/