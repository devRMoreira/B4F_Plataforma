function somaDoArray(array) {
    if (array.length === 0)
        return 0

    return array[0] + (somaDoArray(array.slice(1)))
}