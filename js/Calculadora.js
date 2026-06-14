export default class Calculadora {
    constructor() {
        this.valorActual = "0";
        this.operador = "";
        this.primerNumero = null;
        this.segundoNumero = null;
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

        // si ya hay operación pendiente → calcular primero
        if (this.operador !== "" && this.valorActual !== "0") {
            this.calcular();
        }

        // guardar operador nuevo
        this.operador = operador;

        // guardar número actual como primer número
        this.primerNumero = Number(this.valorActual);

        // preparar siguiente entrada
        this.valorActual = "0";
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
        this.valorActual = String(this.resultado);
        this.primerNumero = this.resultado;
        this.limpiarOperador();
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

    limpiarOperador() {
        this.operador = "";
    }

    reset() {
        this.valorActual = "0";
        this.operador = "";
        this.primerNumero = null;
        this.segundoNumero = null;
        this.resultado = null;
    }

    borrar() {
    this.valorActual = this.valorActual.slice(0, -1);

    if (this.valorActual === "0" || this.valorActual === "-") {
        this.valorActual = "0";
    }
}
}