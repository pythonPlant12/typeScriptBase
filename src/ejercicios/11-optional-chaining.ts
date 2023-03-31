



interface Pasajero {
    nombre: string;
    hijos?: string[];

}

const pasajero1: Pasajero = {
    nombre: "Fernando",
};

const pasajero2: Pasajero = {
    nombre: "Melissa",
    hijos: ["Natalia", "Gabriel"],
};

function imprimeHijos(pasajero: Pasajero): void {
    // El signo "?" también nos sirve para definir si la propiedad es defined, haz funcion .lenght, si es undefined, pass
    const cuantosHijos = pasajero.hijos?.length || 0; 

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);