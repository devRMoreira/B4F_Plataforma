function somatorioAteN(n) {
    if(n === 0)
    return 0

    return n + somatorioAteN(n-1)
}