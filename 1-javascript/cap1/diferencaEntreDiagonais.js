function diferencaEntreDiagonais(matrizquadrada) {
    let diagPrincipal = 0
    let diagSec = 0
    let linha = 0
    let coluna = matrizquadrada.length - 1

    for (let i = 0; i < matrizquadrada.length; i++) {
        diagPrincipal += matrizquadrada[i][i]
    }

    while (linha < matrizquadrada.length) {

        diagSec += matrizquadrada[linha][coluna]

        linha++
        coluna--
    }

    return diagPrincipal - diagSec

}