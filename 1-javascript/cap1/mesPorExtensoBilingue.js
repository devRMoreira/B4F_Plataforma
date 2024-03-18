function mesPorExtensoBilingue(data, lingua) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let mes = data.getMonth()

    switch (lingua) {
        case "en":
            return months[mes]
        case "pt":
            return meses[mes]
    }
}