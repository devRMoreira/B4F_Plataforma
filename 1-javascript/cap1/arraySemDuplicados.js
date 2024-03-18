function arraySemDuplicados(array) {
    return Array.from(array.reduce((acc, ele) => acc.add(ele), new Set()))
}