function contaParesEntreDoisValores(valor1, valor2) {
    let min
    let max
    let pares = 0

    if (valor1 > valor2) {
        max = valor1
        min = valor2
    } else {
        max = valor2
        min = valor1
    }

    while (min <= max) {
        if (min % 2 === 0) {
            pares++
        }

        min++
    }

    return pares
}