function mapaDeOcorrencias(array) {

    return array.reduce((map, ele) => {
        map.has(ele) ? map.set(ele, map.get(ele) + 1) : map.set(ele, 1)
        return map
    }, new Map())
}