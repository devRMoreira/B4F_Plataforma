function adicionaSemanas(data, semanas) {
    const ms = ((semanas * 7) * 24 * 60 * 60 * 1000)
    
    return new Date(data.getTime() + ms)
}