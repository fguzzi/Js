const r = require("readline-sync");

let nome = r.question("Nome do funcionario: ");
let codCargo = r.questionInt("Codigo do cargo: ");
let salario = r.questionFloat("Salario: ");

if(codCargo == 1){
    let salarioNovo = salario + (salario * (50 / 100))
    console.log("Escriturario " + nome + ", Codigo de cargo " + codCargo + ", Salario R$ " + salario.toFixed(2) + ", tera aumento de 50% e passara a receber R$ " + salarioNovo.toFixed(2))
}else if(codCargo == 2){
    let salarioNovo = salario + (salario * (35 / 100))
    console.log("Secretario " + nome + ", Codigo de cargo " + codCargo + ", Salario R$ " + salario.toFixed(2) + ", tera aumento de 35% e passara a receber R$ " + salarioNovo.toFixed(2))
}else if(codCargo == 3){
    let salarioNovo = salario + (salario * (20 / 100))
    console.log("Caixa " + nome + ", Codigo de cargo " + codCargo + ", Salario R$ " + salario.toFixed(2) + ", tera aumento de 20% e passara a receber R$ " + salarioNovo.toFixed(2))
}else if(codCargo == 4){
    let salarioNovo = salario + (salario * (10 / 100))
    console.log("Gerente " + nome + ", Codigo de cargo " + codCargo + ", Salario R$ " + salario.toFixed(2) + ", tera aumento de 10% e passara a receber R$ " + salarioNovo.toFixed(2))
}else if(codCargo == 5){
    console.log("Diretor " + nome + ", Codigo de cargo " + codCargo + ", Salario R$ " + salario.toFixed(2) + ", nao tera aumento")
}else{
    console.log("Codigo invalido.")
}
