export default class UI {
    constructor() {
        this.resultado = document.getElementById("resultado");
    }

    mostrarValor(valor) {
        this.resultado.textContent = valor;
    }

}