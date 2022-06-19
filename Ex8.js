const r = require("readline-sync");

let nome = r.question("Digite nome do funcionario: ");
let cargo = r.question("Digite o cargo: ");
let salAtual = r.questionFloat("Digite salario atual: ");
let salNovo = salAtual + (salAtual * (10 / 100));

if(salAtual < 1000){
    console.log("O novo salario de " + nome + ", cargo " + cargo + ", é R$ " + salNovo);
}else{
    console.log("O salario permaneceu R$ " + salAtual);
}