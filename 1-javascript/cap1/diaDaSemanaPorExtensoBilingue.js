function diaDaSemanaPorExtensoBilingue(data, lingua){
    const dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    const dia = data.getDay()

    if (lingua == "pt") {
        return dias[dia]
    }
    if (lingua == "en") {
        return days[dia]
    }
} 