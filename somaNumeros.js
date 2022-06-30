const prompt = require("prompt-sync")();


let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');

let soma = parseInt(num1) + parseInt(num2);
console.log("A soma dos números é: " + soma);