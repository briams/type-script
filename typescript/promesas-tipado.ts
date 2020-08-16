
(() => {
    

    // Probar con ES6
    const retirerDinero = (montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }

        });

    }
    
    retirerDinero(500)
        .then( montoActual => console.log(`me queda ${montoActual}`) )
        .catch( err => console.warn(err) ); 

}) ();


