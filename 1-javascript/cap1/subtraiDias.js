function subtraiDias(data, dias) {
    const diasSubt = dias * 1000 * 60 * 60 * 24
    const dataMs = data.getTime()
    const resultado = dataMs - diasSubt

    return new Date(resultado)
}