function dataPorExtenso(data) {
    const dias = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado',
    ]

    const meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
    ]

    const diaDaSemana = dias[data.getDay()]

    const dia = data.getDate()

    const mes = meses[data.getMonth()]

    const ano = data.getFullYear()

    return `${diaDaSemana}, ${dia} de ${mes} de ${ano}`
}