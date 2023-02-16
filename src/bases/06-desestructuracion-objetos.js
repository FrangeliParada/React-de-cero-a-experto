        //Desestructuración de objetos
        const persona ={
            nombre:'Tonny',
            edad: 45,
            clave: 'Ironman'
    };

    const { nombre, edad, clave } = persona;

    console.log(nombre);
    console.log(edad);
    console.log(clave);

    // const retornaPersona = ({ nombre, edad, rango ='Capitán' }) => {
    //         console.log(nombre, edad,rango)
    //         return{
    //                 nombreClave: clave,
    //                 anios: edad
    //         }
    // }
    // const avenger = retornaPersona(persona);
    // console.log(avenger);


                    // use context

    const retornaPersona = ({ nombre, edad, rango ='Capitán' }) => {
            return{
              nombreClave: clave,
              anios: edad,
              latlng: {
                    lat: 14.558,
                    lng: -2145.22
              }        }
    }
    const { nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona);
    console.log(nombreClave, anios);
    console.log(lat, lng);