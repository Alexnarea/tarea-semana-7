"use strict"
let añoActual = 2023;
function obtenerEdad(añoActual, añoNacimiento) {
    let edad = añoActual - añoNacimiento;
    return edad;
}

let añoNacimiento = Number(prompt("Ingrese su año de nacimiento"));
let edadActual = obtenerEdad(añoActual, añoNacimiento);
alert("Su edad es " + edadActual);