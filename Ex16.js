const r = require("readline-sync");

let nome = r.question("Nome do funcionario: ");
let cargo = r.question("Cargo: ");
let salario = r.questionFloat("Salario: ");
let salarioNovo = 0;

switch(cargo){
    case("Producao"):
        salarioNovo = salario + (salario * (6.5 / 100));
        console.log("Salario novo: " + salarioNovo.toFixed(2));
        break
    case("Administrativo"):
        salarioNovo = salario + (salario * (7.5 / 100));
        console.log("Salario novo: " + salarioNovo.toFixed(2));
        break
    case("Diretoria"):
        salarioNovo = salario + (salario * (12 / 100));
        console.log("Salario novo: " + salarioNovo.toFixed(2));
    default:
        console.log("Digite corretamente o cargo.");
}    