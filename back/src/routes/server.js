const http = require('http')
const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")


//ROUTE: Hace uso de la lógica y define la ruta
//Acá recibe la respuesta de la solicitud de los controladores

http.createServer((request, response) => {
   
   response.setHeader('Access-Control-Allow-Origin', '*')//esto es cuando no nos deja hacer repeticiones del lado del servidor
   let id = request.url.split('/').at(-1);//para obtener el id de la url (-1) porque el id está en el último índice del array
   
      if(request.url.includes("onsearch")){//en el path del navegador LA URL, tiene esta palabra \onsearch que ejecute:
         getCharById(response, id)
      }
      if(request.url.includes('detail')){
         getCharDetail(response, id)
      }

}).listen(3001, 'localhost')


/*
2. ¡Listo! Ya tenemos nuestro primer controlador. Ahora lo vamos a utilizar en nuestra ruta. Para esto, dirígete al archivo llamado src/routes/server.js. Elimina todo el contenido de este archivo.

Dentro de este archvio tendrás que:
1.Importar http y el controlador que creaste.
2.Crear y levantar un servidor en el puerto 3001.
3.Dentro del callback del servidor debes:
    3.1.copiar y pegar la siguiente línea: res.setHeader('Access-Control-Allow-Origin', '*');
[NOTA]: esta línea permitirá contectar tu FRONT con el SERVIDOR sin que haya problemas de CORS.
    3.2.crear un condicional que pregunte si la url incluye el string "onsearch". En el caso de que si lo incluya deberás ejecutar el controlador pasándole como argumentos:
        a.El parámetro res.
        b.El segundo parámetro debe ser el ID del personaje que recibes mediante la URL.

[PISTA]: dentro del parámetro req.url está el id del personaje. Puedes utilizar el método split() para obtenerlo...

*/