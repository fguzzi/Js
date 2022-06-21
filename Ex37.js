const prompt = require("prompt-sync")();

let numPares = new Array(10);

console.log("Você vai digitar 10 números inteiros e pares");

let i = 1;
while(i <= 10){
    let num = prompt("Digite nº: ");
    numPares[i] = num;
    i++
}
console.log("Mostrando os números digitados: ")
for(c = 1; c <= 10; c++){
    console.log(numPares[c])
}