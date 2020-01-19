// Llamar Biblioteca nativa para levantar un servidor HTTP
const http = require('http');

// Crear servidor
const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
});

// Especificar en que puerto debe escuchar el servidor las peticiones
server.listen(8080, (err) => {
    if (err) throw err;

    console.log('Server listen on port 8080');
});
