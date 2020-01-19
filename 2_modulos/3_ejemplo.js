/*
    En este ejemplo se realiza el uso de un modulo nativo junto con 
    el modulo que acabamos de hacer
*/
// Importamos una Biblioteca Nativa
const fs = require('fs');
const nuestroModulo = require('./2_propio');

// Nota: Si no especifican el 'encoding' readFile retorna un Buffer en la variable 'data'
// Nota 2: Probar sin 'uft8' como parametro
fs.readFile('mi_archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Esto viene en la variable data: ', data);

    // Verificamos si es un String
    const checkString = nuestroModulo.checkIfString(data);
    console.log('checkString: ', checkString);

    // Verificamos si es un Numero
    const checkNumber = nuestroModulo.checkIfNumber(data);
    console.log('checkNumber: ', checkNumber);
})
