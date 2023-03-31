

// Creacion de la clase 
class PersonaNormal{
    constructor(
        public nombre:string, 
        public direccion: string
        ){}
}
// Una clase puede extender otra clase(Como parent/child classes in Python)
class Heroe extends PersonaNormal{
    // Cuando no se define el tipo de acceso a las propiedades de la clase por DEFECTO son PUBLIC 
    // private alterEgo:string; // Solo visible dentro de clase
    // public edad:number; // Fuera de la clase se puede ver la propiedad
    // static nombreReal:number; // Se puede acceder al valor de la propiedad sin instanciar la clase 

    // De esta manera tampoco es común crear las propiedades de la clase
    // alterEgo:string;
    // edad:number;
    // nombreReal:number;
    
    // imprimirNombre () {
    //     return this.alterEgo + " " + this.nombreReal;
    // }
    
// Constructor es algo muy importante, es mejor pasar las propiedades por el constructor. El constructor es como __init__(self) en Python 
// Aqui es donde la mayoría de las veces vamos a añadir propiedades a la clase 
// Hay que tener en cuenta que tenemos que llamar super dentro del constructor para traer las propiedades del parent Class como en ejemplo abajo.
    constructor (
        public alterEgo:string,
        public edad?:number,
        public nombreReal?:string
        ) {
        // this.alterEgo = alterEgo;
        super(nombreReal, 'New York, USA');
    }
}

// La principal diferencia entre la clase e interfaz es que yo no puedo hacer lógica en funciones por ejemplo:
interface Personaje2 {
    alterEgo: string;
    edad: number;
    nombreReal: string;
    // Aqui lo único que puedo hacer es definir lo que retorna y parametros pero no definir la lógica de funcion 
    imprimirNombre: () => string;
}



// Creacion de la instancia con la clase
const ironMan = new Heroe('Iron Man', 24, 'Nikita');

console.log(ironMan);