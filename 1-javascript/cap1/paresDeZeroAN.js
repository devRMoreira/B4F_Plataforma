function paresDeZeroAN(n){

    if(n < 0)
        return "Por favor insira um número superior a 0."

    if(n === 0) 
        return [0]
    

    if(n % 2 === 0){
        return paresDeZeroAN(n - 2).concat(n)
    } else {
        return paresDeZeroAN(n - 1)
    }
    
}