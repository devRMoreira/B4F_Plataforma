function diferencaEmDias(data1, data2) {

    if (data1 > data2) {
        return Math.floor(((data1 - data2) / 1000 / 60 / 60 / 24))
    } else {
        return Math.floor(((data2 - data1) / 1000 / 60 / 60 / 24))
    }
}