const r = require("readline-sync");

let nome = r.question("Digite nome: ");
let peso = r.questionFloat("Peso: ");
let altura = r.questionFloat("Altura: ");

let imc = peso / (altura * altura);

console.log("O IMC = " + imc.toFixed(2));