/*
    URL DOC: https://nodejs.org/api/fs.html
    URL Ejemplo: https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
*/

// Realizamos el llamado de la Biblioteca FileSystem (fs)
const fs = require('fs');

// Agregamos el mensaje 'Hello World' en un buffer y guardamos la salida en la variable 'data'
const data = new Uint8Array(Buffer.from('Hello World!'));

// Utilizamos la funcion 'writeFile' para guardar la información en el archivo 'mi_archivo.txt'
fs.writeFile('mi_archivo.txt', data, (err) => {
    // Aqui controlamos el error en caso que exista
    if (err) throw err;

    // Si no hay error se imprime el mensaje de confirmación
    console.log('Su mensaje ha sido almacenado en mi_archivo.txt.');
});
