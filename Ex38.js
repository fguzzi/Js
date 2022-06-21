const prompt = require("prompt-sync")();

let numeros = new Array(11, 17, 181, 14, 20, 16);

somaPar = 0;
somaImpar = 0;

for(i = 1; i <= numeros.length; i++){
    if(numeros[i] % 2 == 0){
        somaPar = somaPar + 1;
    }else{
        somaImpar = somaImpar + 1;
    }
}
console.log("Foram " + somaPar + " números pares.")
console.log("Foram " + somaImpar + " números ímpares.")