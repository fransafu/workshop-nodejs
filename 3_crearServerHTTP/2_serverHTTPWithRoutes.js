// Llamar Biblioteca nativa para servidor HTTP
const http = require('http');

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
    // Observa como vienen las rutas
    // console.log(req.url);
    if (req.url === '/') {
        res.write('Ahora te encuentras en el Home "/"');
        return res.end();
    }
    if (req.url === '/users') {
        res.write('Ahora te encuentras en la ruta de los usuarios');
        return res.end();
    }
    res.write('Mensaje generico cuando la ruta no se encuentra especificada');
    return res.end();
});

// Especificar el puerto del servidor
server.listen(8080, (err) => {
    console.log('Server listen on port 8080');
});
