const prompt = require("prompt-sync")();

let ini = prompt("Digite o número inicial da PG: ");
let rz = prompt("Digite a razão: ");
let qtde = prompt("Digite quantos números da PG que serão exibidos: ")
let pg = parseInt(ini) * parseInt(rz);

console.log(ini);
console.log(pg);

for(i = 2; i < qtde; i++){
    pg = parseInt(pg) * parseInt(rz);
    console.log(pg);
}