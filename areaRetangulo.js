const prompt = require("prompt-sync")();

let altura = prompt("Digite a largura: ");
let comprimento = prompt("Digite o comprimento: ");

let area = parseFloat(altura) * parseFloat(comprimento);

console.log("A área do retângulo = " + area.toFixed(2));