function calculaModa(array) {
    array.sort((a, b) => a - b)

    let counter = 1
    let maxCount = 0
    let maisRepetido = array[0]


    for (let i = 0; i < array.length; i++) {


        if (array[i] === array[i + 1]) {
            counter++
            if (counter > maxCount) {
                
                maxCount = counter
                maisRepetido = array[i]
            }
        } else {
            counter = 1
        }
    }

    return maisRepetido
} 