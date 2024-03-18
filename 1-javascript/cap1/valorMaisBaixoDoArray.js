function valorMaisBaixoDoArray(array){
    return array.reduce((acc,ele) => ele < acc? ele : acc, array[0])
}