"use strict"
function multiplicar(multiplicador, multiplicando) {
    let suma = 0;
    for (let i = 0; i < multiplicando; i++) {
        suma = suma + multiplicador;
    }

    return suma;

}

let primerValor = Number(prompt("Ingrese valor"));
let segundoValor = Number(prompt("Ingrese valor"));
let result = multiplicar(primerValor, segundoValor);
alert("Su resultado es " + result);