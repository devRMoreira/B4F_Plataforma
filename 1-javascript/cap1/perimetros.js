function perimetroDoQuadrado(lado) {
    return lado * 4
}


function perimetroDoRectangulo(comprimento, largura) {
    return (comprimento * 2) + (largura * 2)
}


function perimetroDoCirculo(raio) {
    return Math.PI * raio * 2
}


function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    const compEmFalta = (comprimentoMaior - comprimentoMenor) / 2

    const ladoEmFalta = Math.sqrt((compEmFalta ** 2 + altura ** 2))

    return (ladoEmFalta * 2) + comprimentoMaior + comprimentoMenor
}


function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    return (Math.sqrt((((diagonalMaior / 2) ** 2) + ((diagonalMenor / 2) ** 2))) * 4)
}


function perimetroDoHexagono(lado) {
    return lado * 6
}