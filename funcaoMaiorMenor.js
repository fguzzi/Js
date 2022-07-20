function maiorMenor(lista){

let maior = 0;
let menor = 0;

for(i = 0; i <= lista.length; i++){
    if(lista[i] > maior){
        maior = lista[i];
    }
    if(lista[i] < menor){
        menor = lista[i];
    }
}
console.log(maior, menor);
}