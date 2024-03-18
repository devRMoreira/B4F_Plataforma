function arrayInfinito(A, esquerda, direita) {

    if (!A || A.length === 0) {
        return 0
    }

    const tamanho = direita - esquerda + 1

    let soma = 0

    for (let i = 0; i < tamanho; i++) {

        const indiceReal = (esquerda + i) % A.length

        soma += A[indiceReal]
    }

    return soma
}