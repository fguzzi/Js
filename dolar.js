const prompt = require("prompt-sync")();

let cotacao = prompt("Digite a cotação do dolar: ");
let dolar = prompt("Digite o valor em dolar: ");

let valorReal = parseFloat(dolar) * parseFloat(cotacao);

console.log("O valor convertido é R$ " + valorReal.toFixed(2));