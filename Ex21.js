const r = require("readline-sync");

soma = 0;

for(i = 1; i <= 15; i++){
    let num = r.questionInt("Digite numero: ");
    soma = soma + num;
}
console.log("A soma dos numeros = " + soma);