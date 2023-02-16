//Objetos literales

const persona ={
    nombre: 'Tonny',
    apellido: 'Statk',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};

// console.table({persona}); objeto dentro de otro objeto

    //mala practica - mutacion que no es valida
 const persona2 = persona; //solo copia el espacio de memoria
 persona2.nombre = 'Peter'; //falso positivo

 console.log(persona) //se asigna en ambos
 console.log(persona2);

    // copia correcta
 const persona3 = {...persona};
 persona3.nombre = 'maria';

 console.log(persona3); //se asigna solamente en él
 console.log(persona);