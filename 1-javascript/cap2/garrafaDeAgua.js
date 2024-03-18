class GarrafaDeAgua {
    #capacidade
    #quantidade
    #aberta 

    constructor(capacidade) {
        this.#capacidade = capacidade
        this.#quantidade = 0 
        this.#aberta = false 
    }

    beber() {
        if (this.#aberta) {
            
            if(this.#quantidade >= 200){
                this.#quantidade -= 200
            }
            if(this.#quantidade < 200){
                this.#quantidade = 0
            }
            if (this.#quantidade === 0) {
                return "A garrafa está vazia"
            }
        } 
        else { 
            return "A garrafa está fechada" 
        }
    }

    encher(quant) {
        if (this.#aberta) { 

            if(this.#quantidade < this.#capacidade){ 

                if(this.#quantidade + quant > this.#capacidade){ 

                    this.#quantidade = this.#capacidade

                }else { 

                    this.#quantidade += quant
                }

            } else {
                    return "A garrafa está cheia"
                }
        }

        else {
            return "A garrafa está fechada" 
        }
    }

    abrirFechar() {

        if (!this.#aberta) {

            this.#aberta = true
        } else {

            this.#aberta = false
        }
    }

    get quantidade() {
        return this.#quantidade
    }
    get aberta() {
        return this.#aberta
    }
    get capacidade() {
        return this.#capacidade
    }
}