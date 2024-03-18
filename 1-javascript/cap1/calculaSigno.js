function calculaSigno(dia, mes) {
    let diasDoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasDoAno = 0

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }

    if (dia < 1 || dia > diasDoMes[mes]) {
        return "Por favor introduza um dia entre 1 e " + diasDoMes[mes] + "."
    }

    for (let i = 1; i < mes; i++) {
        diasDoAno += diasDoMes[i]
    }

    diasDoAno += dia


    if (diasDoAno >= 21 && diasDoAno <= 49) {
        return "Aquário"
    }

    if (diasDoAno >= 50 && diasDoAno <= 79) {
        return "Peixes"
    }

    if (diasDoAno >= 80 && diasDoAno <= 110) {
        return "Carneiro"
    }

    if (diasDoAno >= 111 && diasDoAno <= 140) {
        return "Touro"
    }

    if (diasDoAno >= 141 && diasDoAno <= 171) {
        return "Gémeos"
    }

    if (diasDoAno >= 172 && diasDoAno <= 203) {
        return "Caranguejo"
    }

    if (diasDoAno >= 204 && diasDoAno <= 234) {
        return "Leão"
    }

    if (diasDoAno >= 235 && diasDoAno <= 265) {
        return "Virgem"
    }

    if (diasDoAno >= 266 && diasDoAno <= 295) {
        return "Balança"
    }

    if (diasDoAno >= 296 && diasDoAno <= 325) {
        return "Escorpião"
    }

    if (diasDoAno >= 326 && diasDoAno <= 355) {
        return "Sagitário"
    }

    if (diasDoAno >= 356 || diasDoAno <= 20) {
        return "Capricórnio"
    }

}