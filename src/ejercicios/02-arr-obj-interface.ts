

console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/
let habilidades: (string)[] = ['Hello', 'okay', 'my_god'];
habilidades.push('hi')

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    pueblonatal?: string;
}

const personaje: Personaje = {
    nombre: 'Niktia',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
}

personaje.pueblonatal = 'Pueblo Paleta';

console.table(personaje);