const pr = require("prompt-sync")();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

console.log("JOGO DE DADOS PARA DOIS JOGADORES");

let jog1 = pr("Digite o nome do 1º jogador: ");
let valor1 = parseInt(getRandomInt(1, 6));
console.log(jog1 + " Tirou " + valor1);
console.log("--------");

let jog2 = pr("Digite o nome do 2º jogador: ");
let valor2 = parseInt(getRandomInt(1, 6));
console.log(jog2 + " Tirou " + valor2);
console.log("--------");

if(valor1 > valor2){
    console.log(jog1 + " venceu !!!");
}
else if(valor1 < valor2){
    console.log(jog2 + " venceu !!!");
}
else{
    console.log("O jogo empatou !!!");
}