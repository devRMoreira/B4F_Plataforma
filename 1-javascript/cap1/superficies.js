function superficieDaEsfera(raio) {
    return 4 * Math.PI * Math.pow(raio, 2)
}


function superficieDoCubo(lado) {
    return (lado ** 2) * 6
}


function superficieDoParalelepipedoQuadrado(ladodabase, comprimento) {

    const areaLateral = 2 * ladodabase * comprimento

    const areaBase = ladodabase * ladodabase

    const areaTotal = 2 * areaBase + 2 * areaLateral

    return areaTotal
}

function superficieDaPiramideQuadrada(ladodabase, altura) {

    const areaDaBase = ladodabase ** 2

    const alturaDoTriangulo = Math.sqrt((ladodabase / 2) ** 2 + altura ** 2)

    const areaFaces = (ladodabase * alturaDoTriangulo) / 2

    const superficie = areaDaBase + 4 * areaFaces

    return superficie
}


function superficieDoCone(raio, altura) {

    const base = Math.PI * Math.pow(raio, 2)

    const areaLateral = Math.PI * raio * Math.sqrt((Math.pow(raio, 2) + Math.pow(altura, 2)))

    const superficie = base + areaLateral

    return superficie
}


function superficieDoCone(raio, altura) {

    return ((Math.PI * Math.pow(raio, 2)) + Math.PI * raio * Math.sqrt((Math.pow(raio, 2) + Math.pow(altura, 2))))
}


function superficieDoCilindro(raio, altura){

    const areaBase = Math.PI * raio * raio

    const areaLateral = 2 * Math.PI * raio * altura

    const areaTotal = 2 * areaBase + areaLateral

    return areaTotal
}

