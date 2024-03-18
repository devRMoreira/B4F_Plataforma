function contaNumeroDeDivisoesPorDois(n) {
    let counter = 0
    let div = n

    while (div > 1) {
        div = Math.floor(div / 2)
        counter++
    }

    return counter
}