// checkIfString verifica si el parametro corresponde a un String
const checkIfString = (str) => {
    if (typeof str === 'string' || str instanceof String) {
        return true;
    }
    return false;
}

// checkIfNumber verifica si el parametro ingresado corresponde a un Numero
const checkIfNumber = (num) => parseInt(num) === num;

module.exports = {
    checkIfString,
    checkIfNumber,
};
