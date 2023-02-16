    //Operador condicional ternario
    const activo =true;

    // let mensaje = '';
    // if ( activo ){
    //     mensaje = 'Activo';
    // }else{
    //     mensaje = 'Inactivo';
    // }

        //dos condiciones
    const mensaje = (activo) ? 'Activo' : 'Inactivo';
    console.log(mensaje);

        //una sola condicion
    const mensaje2 = !activo && 'Activo';
    console.log(mensaje2);
