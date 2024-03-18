function encontraPrimo(array) {
    return array.find((ele) => {
        if (ele <= 2)
            return false
        for (let i = 2; i <= Math.sqrt(ele); i++) {
            if (ele % i === 0) {
                return false
            }
        }
        return true
    })
}