export default class Calculadora {
    constructor() {
        this.valorActual = "0";
        this.operador = "";
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.resultado = null;

    }
    agregarNumero(numero) {
        if (this.valorActual == "0") {
            this.valorActual = numero;
        } else {
            this.valorActual += numero;
        }
    }

    agregarOperador(operador) {

        if (this.resultado == null) {
            this.operador = operador;
            this.primerNumero = Number(this.valorActual);
            this.limpiar();
        } else {
            this.operador = operador;
            this.primerNumero = this.resultado;
            this.limpiar();
        };
    }
    calcular() {
        this.segundoNumero = Number(this.valorActual);
        switch (this.operador) {
            case "+":
                this.resultado = this.primerNumero + this.segundoNumero;
                break;
            case "-":
                this.resultado = this.primerNumero - this.segundoNumero;
                break;
            case "x":
                this.resultado = this.primerNumero * this.segundoNumero;
                break;
            case "/":
                this.resultado = this.primerNumero / this.segundoNumero;
                break;
            default:
                console.log("MAL");
        }
        this.valorActual = "" + this.resultado;
    }
    ponerDecimal() {
        if (this.valorActual.includes(".")) {
            console.log("Solo puede haber un punto");
        } else {
            this.valorActual += ".";
        }
    }
    
    cambiarPositivo() {

        if (this.valorActual !== "0" && this.valorActual !== "0.") {
            if (this.valorActual[0] == "-") {
                this.valorActual = this.valorActual.slice(1);
            } else {
                this.valorActual = "-" + this.valorActual;
            }
        }
    }

    limpiar() {
        this.valorActual = "0";
    }

    reset() {
        this.valorActual = "0";
        this.operador = "";
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.resultado = null;
    }

    borrar() {
        if (this.valorActual === "-" || this.valorActual.length > 1) {
            this.valorActual = this.valorActual.slice(0, -1);
        } else if (this.valorActual == "0") {
        } else {
            this.valorActual = "0";
        }
    }
}