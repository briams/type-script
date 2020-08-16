
(function(){
    
    function active( who: string, 
                    objeto: string = 'señal',
                    momento?: string
                    ) {
        if (momento) {
            console.log(`${who} activo la ${objeto} en la ${momento}`);
        } else {
            console.log(`${who} activo la ${objeto}`);
        }

    }

    active('brian')

}) ();

