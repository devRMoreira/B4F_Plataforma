function dataMaisRecente(data1, data2) {
    return data1.getTime() > data2.getTime() ? data1 : data2
}   