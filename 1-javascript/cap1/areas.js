function areaDoQuadrado(lado) {
    return lado * lado
}


function areaDoRectangulo(comprimento, largura) {
    return comprimento * largura
}


function areaDoCirculo(raio) {
    return Math.PI * raio ** 2
}


function areaDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    return ((comprimentoMaior + comprimentoMenor) * altura) / 2
}


function areaDoLosango(diagonalMaior, diagonalMenor) {
    return diagonalMaior * diagonalMenor / 2
}


function areaDoHexagono(lado) {
    return Math.floor(((3 * Math.sqrt(3) * (lado * lado)) / 2))
}