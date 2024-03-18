function somaDiagonalSecundaria(matrizquadrada) {
    let soma = 0
    let linha = 0
    let coluna = matrizquadrada.length - 1

    while (linha < matrizquadrada.length) {

        soma += matrizquadrada[linha][coluna]

        linha++
        coluna--
    }

    return soma
}