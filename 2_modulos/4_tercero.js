/*
    Para completar exitosamente este punto se debe inicializar npm dentro del proyecto
    con el comando 'npm init'. Este genera una serie de preguntas como el nombre del proyecto,
    la version, entre otras preguntas.

    + npm init
    + npm install --save is-number

    Esperar a que se cree el archivo package.json, luego instalar la dependencia, esperar 
    a que este creado el archivo package-lock.json y la carpeta node_modules.

    Explicar para que sirve package-lock.json y la carpeta node_modules. plantear problema de node_modules.

    URL de la Biblioteca: https://github.com/jonschlinkert/is-number
*/

const isNumber = require('is-number');

// Retorna el objeto Function
console.log(isNumber);

// Convertimos el objeto en String para ver la funcion
console.log(String(isNumber));

// Probamos la funcion
console.log('15: ', isNumber(15));
console.log('Hello World!: ', isNumber('Hello World!'));