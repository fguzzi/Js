const r = require("readline-sync");

let idadeAnos = r.questionInt("Digite sua idade: ");

let meses = idadeAnos * 12;
let dias = idadeAnos * 365;
let horas = dias * 24;
let minutos = horas * 60;

console.log("Você viveu: ");
console.log(meses + " meses");
console.log(dias + " dias");
console.log(horas + " horas");
console.log(minutos + " minutos");