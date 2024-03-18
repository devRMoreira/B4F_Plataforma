function contaInteirosDoArray(array){
    
    if(array.length === 0){
        return 0
    }

    if(Number.isInteger(array[0])){
        array.shift(0)
        return 1 + contaInteirosDoArray(array)
    } else {
        array.shift(0)
        return contaInteirosDoArray(array)
    }
    
}