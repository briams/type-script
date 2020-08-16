
(function(){
    // funcion normal
    function mifuncion( a: string) {
        return a.toUpperCase();
    }
    // funcion asignada a una variable
    const miFuncion = function(a: string) {
        return a.toUpperCase();
    }

    // tipo flecha
    const miFuncionF = (a: string) => a.toUpperCase();

    console.log( miFuncion('Normal') );
    console.log( miFuncionF('Flecha') );
    
    // funcion asgnada a una variable
    const sumar = function(a: number, b: number) {
        return a + b;
    }
    // funcion flecha
    const sumarF = (a: number , b : number) => a + b;

    console.log( sumar(7, 8) );
    console.log( sumarF(7, 8) );

    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout( () => {
                console.log(`${this.nombre} smash!!`);

            }, 1000 )
        }
    }

    hulk.smash()


}) ();

