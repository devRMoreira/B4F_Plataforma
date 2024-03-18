function arrayDeNAZero(n) {
    if (n < 0)
        return "Por favor insira um número superior a 0."

    if (n == 0)
        return [0]

    return [n, ...arrayDeNAZero(n - 1)]
}