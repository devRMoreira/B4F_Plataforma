function fatoriaisDoArray(array) {
    return array.map((ele) => factorial(ele))
}

function factorial(n) {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}