        //Desestructuración de arreglos

//ejemplo1
const personajes = ['Dari','Leida','Marino'];

const [p1] = personajes;
console.log(p1);

const [, p2] = personajes;
console.log(p2);

const [, , p3] = personajes;
console.log(p3);

//ejemplo2
const retornaArreglo = () => {
        return[ 'ABC', 123 ];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//ejemplo3
        //tarea
        //1. el primer valor del arr se llamará nombre
        //2. se llamrá setNombre
const state = ( valor ) => {
        return[valor, () =>{console.log('Hola mundo')}];
}
const [ nombre, setNombre] = state('maria');
console.log(nombre);
setNombre();

