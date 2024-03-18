class Inteiro {
    #valor;

 constructor(valor){
     this.#valor = valor
     if(typeof valor === "number"){
         this.#valor = Math.trunc(valor) //parte inteira
     } 
     else {
         this.#valor = 0; //0 se não for
     }
 }

 set valor(novoValor){
     if(typeof novoValor === "number"){
         this.#valor = Math.trunc(novoValor);
     }
 }

 get valor(){
     return this.#valor;
 }
}