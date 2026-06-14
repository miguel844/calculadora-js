import Calculadora from "./Calculadora.js";

const calc = new Calculadora();

let resultado = document.getElementById("resultado");

let botones = document.querySelectorAll("div.boton");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let entrada = boton.textContent;
        if (/^[0-9]$/.test(entrada)) {
            calc.agregarNumero(entrada);
            resultado.textContent = calc.valorActual;

        } else if (entrada == "=") {
            calc.calcular();
            resultado.textContent = calc.valorActual;

        } else if (entrada == "C") {
            calc.limpiar();
            resultado.textContent = 0;

        } else if (entrada == "CE") {
            calc.reset();
            resultado.textContent = 0;
            
        } else {
            calc.agregarOperador(entrada);
        }

        console.log(calc.valorActual);

    });
});








