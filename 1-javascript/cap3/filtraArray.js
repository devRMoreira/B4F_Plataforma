function filtraArray(array){
    return array.filter((ele) => ele % 2 === 0 ? "" : ele)
}