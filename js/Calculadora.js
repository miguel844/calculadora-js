export default class Calculadora {
    constructor() {
        this.valorActual = "";
        this.operador = "";
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.resultado = null;

    }
    agregarNumero(numero) {
        this.valorActual += numero;
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
        this.valorActual = "" +this.resultado;
    }

    limpiar() {
        this.valorActual = "";
    }

    reset(){
        this.valorActual = "";
        this.operador = "";
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.resultado = null;
    }

    borrar(){
        this.valorActual = this.valorActual.slice(0,-1);
    }
}