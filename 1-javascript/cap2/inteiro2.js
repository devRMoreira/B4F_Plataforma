class Inteiro {
    // completa a classe
    #valor
    constructor(valor) {
        this.#valor = isNaN(valor) ? 0 : Math.floor(valor);
    }

    get valor() {
        return this.#valor
    }

}