const r = require("readline-sync");

let num = r.questionInt("Digite um numero para saber o dobro: ");

let dobro = num * 2;

console.log("O dobro de " + num + " é " + dobro);
