import { Producto } from "./06-desestructuracion-funcion";
import { calculaISV } from "./06-desestructuracion-funcion";




const carritoCompras: Producto[] = [
    {
        desc: "Telefono1",
        precio: 100
    },
    {
        desc: "Telefono2",
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras)


console.log('Total: ', total);
console.log('Isv: ', isv);