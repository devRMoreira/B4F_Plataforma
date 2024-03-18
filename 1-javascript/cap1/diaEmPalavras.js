function diaEmPalavras(dia, mes, ano) {
    let diasDoMes = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezasseis", "dezassete", "dezoito", "dezanove", "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "trinta", "trinta e um"]
    let meses = ["", "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }

    if (dia < 1 || dia > diasPorMes[mes]) {
        if (((0 == ano % 4) && (0 != ano % 100)) || (0 == ano % 400)) {
            return "Por favor introduza um dia entre 1 e 29."
        }

        return `Por favor introduza um dia entre 1 e ${diasPorMes[mes]}.`
    }

    if (ano < 2000 || ano > 2030) {
        return "Por favor introduza um ano entre 2000 e 2030."
    }

    return `${diasDoMes[dia]} de ${meses[mes]} de dois mil e ${diasDoMes[ano - 2000]}`

}