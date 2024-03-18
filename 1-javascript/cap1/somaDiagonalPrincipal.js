function somaDiagonalPrincipal(matrizquadrada) {
    let soma = 0

    for (let i = 0; i < matrizquadrada.length; i++) {
        soma += matrizquadrada[i][i]
    }

    return soma
}