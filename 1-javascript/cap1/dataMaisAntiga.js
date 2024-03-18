function dataMaisAntiga(datas) {
    return datas.reduce((acc, ele) => ele.getTime() < acc.getTime() ? ele : acc, datas[0])
}