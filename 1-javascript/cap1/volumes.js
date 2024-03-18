function volumeDoCubo(lado) {
    return lado ** 3
}


function volumeDoParalelepipedo(comprimento, largura, altura) {
    return comprimento * largura * altura
}


function volumeDoCilindro(raio, altura) {
    return (Math.PI * raio ** 2) * altura
}


function volumeDoCone(raio, altura) {
    return ((Math.PI * raio ** 2) * altura) / 3
}