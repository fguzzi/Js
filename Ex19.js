const r = require("readline-sync");

let idade = r.questionInt("Digite a idade: ");

if(idade >= 0 && idade <= 2){
    console.log("Recem nascido.");
} else if(idade >= 3 && idade <=11){
    console.log("Crianca");
} else if(idade >= 12 && idade <= 19){
    console.log("Adolescente");
} else if(idade >= 20 && idade <= 55){
    console.log("Adulto");
} else{
    console.log("Idoso");
}