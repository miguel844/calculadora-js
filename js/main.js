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

        } else if (entrada == ".") {
            calc.ponerDecimal();
            resultado.textContent = calc.valorActual;

        } else if (entrada == "=") {
            calc.calcular();
            resultado.textContent = calc.valorActual;

        } else if (entrada == "C") {
            calc.limpiar();
            resultado.textContent = calc.valorActual;

        } else if (entrada == "CE") {
            calc.reset();
            resultado.textContent = calc.valorActual;

        } else if (entrada == "←") {
            calc.borrar();
            resultado.textContent = calc.valorActual;
        
        } else if (entrada == "+/-") {
            calc.cambiarPositivo();
            resultado.textContent = calc.valorActual;

        } else {
            calc.agregarOperador(entrada);
        }

    });
});








