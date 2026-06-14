export default class Calculadora{
    constructor(){
        this.valorActual = "";
    }
    agregarNumero(numero){
        this.valorActual += numero;
    }
}