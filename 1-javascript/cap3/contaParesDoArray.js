function contaParesDoArray(array){

    if(array.length === 0){
        return 0
    }

    if(array[0] % 2 === 0){
        array.shift(0)
        return 1 + contaParesDoArray(array)
    } else {
        array.shift(0)
        return contaParesDoArray(array)
    }
}