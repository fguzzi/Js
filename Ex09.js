const r = require("readline-sync");

let salAtual = r.questionFloat("Digite salario atual: ");
let salNovo = salAtual + (salAtual * (30 / 100));

if (salAtual < 500 ? console.log("Novo salario = R$ " + salNovo) : console.log("Sem direito a aumento"));
