class Calculadora {
    constructor() {
        this.historico = []
    }

    somar(a, b) {
        const resultado = a + b

        this.historico.push({ operacao: "soma", a, b, resultado })

        return resultado
    }

    subtrair(a, b) {
        const resultado = a - b

        this.historico.push({ operacao: "subtração", a, b, resultado })

        return resultado
    }

    multiplicar(a, b) {
        const resultado = a * b

        this.historico.push({ operacao: "multiplicação", a, b, resultado })

        return resultado
    }

    dividir(a, b) {
        const resultado = a / b

        this.historico.push({ operacao: "divisão", a, b, resultado })

        return resultado
    }

    lerHistorico(operacao) {

        if (!operacao) {

            return this.historico

        } else {

            return this.historico.filter((item) => item.operacao === operacao)
        }
    }
}