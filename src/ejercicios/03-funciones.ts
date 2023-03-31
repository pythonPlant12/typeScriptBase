

console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number{
    return a + b;
}


const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}


function multiplicar(numero: number, otroNumbero?: number, base: number = 10): number {
    return numero * base;
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHP: () => void;

}

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Nikita",
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vida: ', this.pv);
    }
}
nuevoPersonaje.mostrarHP();
curar(nuevoPersonaje, 20);