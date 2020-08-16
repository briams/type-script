
(() => {

    // Probar con ES6

    console.log('Inicio');

    const prom1 = new Promise( (resolve, reject) => {

        setTimeout( () => {
            // resolve('Se termino el timeout');
            reject('Se termino el timeout');
        }, 1000);

    });

    prom1
        .then( message => console.log(message) )
        .catch( err => console.warn(err) );

    console.log('Fin');


    

}) ();

