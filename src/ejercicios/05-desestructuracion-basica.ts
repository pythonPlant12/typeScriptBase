console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
const autor = 'Fulano';
// Para desustructurar un objeto se hace con {}
const { volumen, segundo, cancion, detalles:{autor:autorDetalle} } = reproductor;
// const { autor } = detalles;


// console.log('El volumen actial es: ' + volumen);
// console.log('El segundo es: ' + segundo);
// console.log('El cancion es: '+ cancion);
// console.log('El autor es: '+ autorDetalle);

// Para desutructurar un array se hace con [] es importante la posicion en arrays a la hora de estructurar 
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [posicion1, posicion2, posicion3] = dbz;
// Si solo necesitariamos la tercera variable del array sería
// const [,,posicion3] = dbz;

console.log('Personaje 1: ' + posicion1);
console.log('Personaje 2:'+ posicion2);
console.log('Personaje 3:'+ posicion3);