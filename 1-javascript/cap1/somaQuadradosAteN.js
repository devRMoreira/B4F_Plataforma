function somaQuadradosAteN(n){

    if(n==1) return 1

    return (n ** 2) + somaQuadradosAteN(n-1)
}