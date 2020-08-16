
(() => {

    const avenger = {
        name: 'steve', 
        nick: 'Capitan America',
        power: 'Super Soldier' 
    }

    // const extraer = (avenger: any) => {
    const extraer = ({ name, nick }: any) => {
        
       // const { name, nick } = avenger;
    
        console.log(name)
        console.log(nick)
        // console.log(power)
    } 

    extraer(avenger);

    const avengers: string[] = ['Thor', 'Iromnman', 'Spiderman'];

    const [ , ironman, spiderman ] = avengers;

    // console.log( thor )
    console.log( ironman )
    console.log( spiderman )




}) ();

