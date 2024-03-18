function produtoExclusivo(array) {
    return array.reduce((acc, ele, index) => {

        let mult = 1

        const filtered = array.filter((num, numIndex) => index !== numIndex)

        for (let i = 0; i < filtered.length; i++) {
            mult *= filtered[i]

        }

        return acc.concat(mult)

    }, [])
}