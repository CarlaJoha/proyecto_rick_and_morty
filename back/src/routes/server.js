const http = require('http');
const { request } = require('https');
const characters = require("../utils/data")
//CREAR EL SERVIDOR
http.createServer((request, response) => {
    if(request.url.includes('rickandmorty/character')){
        let id = request.url.split('/').at(-1);
//COMPARAR LO QUE HAY EN DATA Y TRAERME LO QUE NECESITO:
        var characterFilter = characters.find(character => {
            character.id === Number(id)
        })//hay que parsear la respuesta, en id recibo una string y characterFilter un numero
   
//LA RESPUESTA
        response.writeHead(200, {"Content-type" : "application/json"})
        response.end(JSON.stringify(characterFilter))
    }

}).listen(3001, 'localhost')


module.exports = characters;
/*
Cuando quiero tomar datos de la url todos son STRINGS, si quiero trabajar con ellos, tengo que parsearlos

OTRA FORMA: let characterFilter = characters.filter(character => {
                character.id === id
            })

el filter me devuelve un [{data}]
el find me devuelve {data}    

PARA CONECTAR BACK CON FRONT, me voy a app del front: como ya cree el servidor, ya no consumo datos de uno api externa. Sino mi propia API
*/