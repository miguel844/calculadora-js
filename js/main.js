import Calculadora from "./Calculadora.js";

const calc = new Calculadora();

let entradaActual = document.getElementById("entradaActual");
let operador = document.getElementById("operador");
let total = document.getElementById("total");
let botones = document.querySelectorAll("div.boton");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let entrada = boton.textContent;
        if (/^[0-9]$/.test(entrada)) {
            calc.agregarNumero(entrada);
        }else if(entrada == "="){
           resultado = calc.calcular();
        } else {
            calc.agregarOperador(entrada);
        }

        console.log(calc.valorActual);

    });
});








