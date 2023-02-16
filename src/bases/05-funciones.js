        //FUNCIONES en js

   // funciones de flecha

// 1ra forma
const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}
// 2da forma
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}
// 3ra forma
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
// 4ta forma
const saludar4 = () => `Hola mundo`;

console.log(saludar('Zanahoria'));  //1ra
console.log(saludar2('Vegeta'));    //2da
console.log(saludar3('Pepito'));    //3ra
console.log(saludar4());            //4ta - sin argumento

//Con Return
const getUser2 = () => {
   return {
    uid: 'ADC123',
    username:'Er_loco1502'
   }
};
console.log(getUser2());

//Sin Return
const getUser = () => ({
    uid: 'ADC123',
    username:'Er_loco1502'
});
console.log(getUser());


//Tarea
//1. transformar a una funcion de flecha
//2. tiene que retornar un objeto implicito
//3. prueba
function getUsuarioActivo( nombre ){
    return{
            uid: 'ABC1254',
            username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo);

//1 - funcion de flecha
const getUsuarioActivo2 = (nombre) => {
    return{
            uid: 'ABC1254',
            username: nombre
    }
}
const usuarioActivo2 = getUsuarioActivo2('Maria');

console.log(usuarioActivo2);

//2 - objeto implícito
const getUsuarioActivo3 = (nombre) => ({
            uid: 'ABC1254',
            username: nombre
});
const usuarioActivo3 = getUsuarioActivo3('Daniela');

console.log(usuarioActivo3);
