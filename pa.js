const prompt = require("prompt-sync")();

let ini = prompt("Digite o primeiro elemento: ");
let rz = prompt("Digite a razão da PA: ");
let qtde = prompt("Digite quantidade de elementos a serem mostrados: ");
let pa = parseInt(ini) + parseInt(rz);

console.log(ini);
console.log(pa);
for(i = 2; i < qtde; i++){
    pa = parseInt(pa) + parseInt(rz);
    console.log(pa);
}