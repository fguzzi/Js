const r = require("readline-sync");

let num1 = r.questionInt("Digite um numero inteiro: ");
let num2 = r.questionInt("Digite um numero inteiro: ");

if(num1 > num2){
    console.log("Numero maior: " + num1);
}
else if(num2 > num1){
    console.log("Numero maior: " + num2);
}
else if(num1 == num2){
    console.log("Numeros iguais.");
}