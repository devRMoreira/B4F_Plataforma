function somaDosQuadradosDoArray(array){

    if(array.length === 0){
        return 0
    }
    
    return Math.pow(array[0], 2) + somaDosQuadradosDoArray(array.slice(1))

}

console.log(somaDosQuadradosDoArray([2,4,6]))