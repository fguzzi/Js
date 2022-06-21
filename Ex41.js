const r = require("prompt-sync")();

let nome = r("Digite nome: ");
let notaProva = r("Digite nota da prova: ")
let notaTrabalho = r("Digite nota do trabalho: ")
let med = (parseFloat(notaProva) + parseFloat(notaTrabalho)) / 2;
let aluno = [nome];
let media = [med];

console.log("A média de " + aluno + " é " + media);