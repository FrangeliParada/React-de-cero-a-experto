const nombre = 'Frangeli';
const apellido = 'Parada';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}
                            //Template string
console.log(`Este es un texto: ${ getSaludo( nombre ) }`);