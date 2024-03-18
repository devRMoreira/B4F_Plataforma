function tempoEmPalavras(h, m) {
    let horas = ["meia noite", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "meio dia", "uma"]
    let minutos = ["em ponto", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "um quarto", "dezasseis", "dezassete", "dezoito", "dezanove", "vinte", "vinte e um", "vinte e dois", "vinte e três", "vinte e quatro", "vinte e cinco", "vinte e seis", "vinte e sete", "vinte e oito", "vinte e nove", "meia"]

    if (h > 12) {

        if (m === 0) {
            return horas[h - 12] + " " + minutos[0]
        }

        if (m > 30) {

            if (h === 23) {
                return minutos[60 - m] + " para a " + horas[0]
            }

            if (h === 23) {
                return minutos[60 - m] + " para a " + horas[1]
            }

            return minutos[60 - m] + " para as " + horas[h - 11]
        }

        return horas[h - 12] + " e " + minutos[m]
    }

    if (m === 0) {
        return horas[h] + " " + minutos[0]
    }

    if (m > 30) {

        if (h === 11) {
            return minutos[60 - m] + " para o " + horas[12]
        }

        if (h === 12) {
            return minutos[60 - m] + " para a " + horas[1]
        }

        return minutos[60 - m] + " para as " + horas[h + 1]
    }

    return horas[h] + " e " + minutos[m]
}