

// Si añadimos genérico <T> el retorno de función se convierte en el tipo del parametro que le pasamos 
function queTipoSoy<T>(argumento: T) {
    return argumento;
}


let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(5);
let soyArray = queTipoSoy([1, 2, 3, 4, 5]);

// Se puede definir retorno de esa manera siempre y cuando hay <T> en la definicion de funcion
// let soyExplicito = queTipoSoy<string>(100)

