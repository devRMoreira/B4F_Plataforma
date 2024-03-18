function calculaDiasAteAoNatal(dia, mes) {
    let diasDoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let diasAteNatal = 359

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }

    if (dia < 1 || dia > diasDoMes[mes]) {
        return "Por favor introduza um dia entre 1 e " + diasDoMes[mes] + "."
    }

    if (mes === 12 && dia === 25) {
        return "Hoje é Natal!"
    }

    for (let i = 1; i < mes; i++) {
        diasAteNatal -= diasDoMes[i]
    }

    if (mes === 12 && dia > 25) {
        diasAteNatal += 365
    }



    return `Faltam ${diasAteNatal -= dia} dias até ao Natal.`

}