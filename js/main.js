import Calculadora from "./Calculadora.js";
import UI from "./ui.js";

const calc = new Calculadora();
const ui = new UI();

let botones = document.querySelectorAll("div.boton");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let entrada = boton.textContent;
        if (/^[0-9]$/.test(entrada)) {
            calc.agregarNumero(entrada);
            ui.mostrarValor(calc.valorActual);

        } else if (entrada == ".") {
            calc.ponerDecimal();
            ui.mostrarValor(calc.valorActual);

        } else if (entrada == "=") {
            calc.calcular();
            ui.mostrarValor(calc.resultado);            
            calc.limpiar();

        } else if (entrada == "C") {
            calc.limpiar();
            ui.mostrarValor(calc.valorActual);

        } else if (entrada == "CE") {
            calc.reset();
            ui.mostrarValor(calc.valorActual);

        } else if (entrada == "←") {
            calc.borrar();
            ui.mostrarValor(calc.valorActual);
        
        } else if (entrada == "+/-") {
            calc.cambiarPositivo();
            ui.mostrarValor(calc.valorActual);
            
        } else {
            calc.agregarOperador(entrada);
            ui.mostrarValor(calc.primerNumero);            
        }
    });
});








