const r = require("readline-sync");

let num = r.questionInt("Digite um numero inteiro: ")

if(num % 2 == 0){
    console.log("Numero digitado: " + num + " - par.");
}else{
    console.log("Digite apenas numeros pares.");
}