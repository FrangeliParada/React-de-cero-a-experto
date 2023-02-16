import heroes, {owners}  from '../data/heroes'
        // importaciones multiples ^

//console.log(heroes);***
console.log (owners);

        //EJEMPLO 1 - find
// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) => {
//         if( heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

        //EJEMPLO 2 - find
// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id );
// }

        //EJEMPLO 3 = menos lineas de codigo, misma funcionalidad

//Find = busca solo el primer atributo que encuentra
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );


//console.log(getHeroeById(2));

//filter = Busca todos los que tengan ese atributo
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner )

//console.log( getHeroesByOwner('Marvel'));
