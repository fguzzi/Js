const r = require("readline-sync");

let nome = r.question("Digite nome do funcionario: ");
let cargo = r.question("Digite o cargo: ");
let salAtual = r.questionFloat("Digite salario atual: ");

let salNovo = salAtual + (salAtual * (10/100));

console.log("O funcionario " + nome + ", de cargo " + cargo + ", passará a receber R$ " + salNovo.toFixed(2));
