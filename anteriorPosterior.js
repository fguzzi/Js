const prompt = require("prompt-sync")();

let num = prompt("Digite um número: ")

let posterior = parseInt(num) + 1;
let anterior = parseInt(num) - 1;

console.log("O número posterior é " + posterior + " e o anterior é " + anterior);