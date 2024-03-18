function contaSuperioresAN(array, n) {

    if (array.length === 0)
        return 0

    if (array[0] > n) {

        array.shift(0)

        return 1 + contaSuperioresAN(array, n)
    } else {

        array.shift(0)

        return contaSuperioresAN(array, n)
    }
}