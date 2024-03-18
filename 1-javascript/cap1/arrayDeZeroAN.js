function arrayDeZeroAN(n) {
    if (n < 0)
        return "Por favor insira um número superior a 0."

    if (n == 0)
        return [0]

    return [...arrayDeZeroAN(n - 1), n]
}