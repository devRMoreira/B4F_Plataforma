function calculaEstacaoDoAno(dia, mes) {
    let diasDoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasDoAno = 0

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }

    if (dia < 1 || dia > diasDoMes[mes]) {
        return `Por favor introduza um dia entre 1 e ${diasDoMes[mes]}.`
    }

    for (let i = 1; i < mes; i++) {
        diasDoAno += diasDoMes[mes]
    }

    diasDoAno += dia

    if (diasDoAno >= 83 && diasDoAno <= 170) {
        return "Primavera"
    }

    if (diasDoAno >= 171 && diasDoAno <= 260) {
        return "Verão"
    }

    if (diasDoAno >= 261 && diasDoAno <= 361) {
        return "Outono"
    }

    if (diasDoAno >= 362 || diasDoAno <= 82) {
        return "Inverno"
    }
}