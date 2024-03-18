function fatorialN(n) {
    const num = BigInt(n)
    if (n === 0n) {
        return 1n
    }

    return num * fatorialN(num-1n)
}