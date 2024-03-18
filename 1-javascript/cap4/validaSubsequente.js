function validaSubsequente(array, subArray) {
    let i = 0
    let j = 0

    while (i < array.length && j < subArray.length) {
        if (array[i] === subArray[j]) {
            j++
        }
        i++
    }

    return j === subArray.length;
}