const r = require("readline-sync");

let anoNasc = r.questionInt("Digite o ano de seu nascimento: ");
let anoAtual = 2022;

let idade = anoAtual - anoNasc;
let semanas = idade * 52

console.log("Idade = " + idade + " anos ");
console.log("Correspondem a " +semanas +  " semanas.");
