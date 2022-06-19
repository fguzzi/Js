const r = require("readline-sync");

let nota1 = r.questionFloat("Nota 1: ");
let nota2 = r.questionFloat("Nota 2: ");
let nota3 = r.questionFloat("Nota 3: ");
let nota4 = r.questionFloat("Nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4 ) / 4;

if(media >= 7){
    console.log("Aluno aprovado com media " + media);
}
else if(media < 5){
    console.log("Aluno reprovado com media " + media);
}else{
    console.log("Aluno em recuperacao com media " + media);
}