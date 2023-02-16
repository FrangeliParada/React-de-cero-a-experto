import {getHeroeById} from "./bases/08-import-export"

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {

//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el héroe');

//     }, 2000);
// });

// the = significa que la promesa se hizo correctamente
// catch = significa que la promesa dio un error o si de alguna razon se llamo al 'reject'
// finally = es algo que se va a ejecutar despues de the y catch

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ));

//******************************************************************************************************* */

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se encontró el héroe');
            }

        }, 2000);

    });

}

getHeroeByIdAsync(1)
.then(console.log)
.catch( console.warn)