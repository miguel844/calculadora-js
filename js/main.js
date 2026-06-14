import Calculadora from "./Calculadora.js";

const calc = new Calculadora();

calc.agregarNumero("5");
calc.agregarNumero("2");

console.log(calc.valorActual);