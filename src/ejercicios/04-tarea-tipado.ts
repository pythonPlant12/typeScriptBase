interface superHeroInterface {
    nombre: string;
    edad: number;
    direccion: direccionInterface;
    // direccion: {
    //     calle: string, 
    //     pais: string, 
    //     ciudad: string
    // };
    mostrarDireccion: () => string;
}

interface direccionInterface {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHero: superHeroInterface = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main Street',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHero.mostrarDireccion();
console.log(direccion);