const r = require("prompt-sync")();

let notas = [10, 7.8, 5.6, 1, 4, 8, 7.5, 6, 3, 9.5];
let soma = 0;
let aprovados = 0;
let reprovados = 0;

for(i = 0; i <= 10; i++){
    if(notas[i] >= 7){
        aprovados = aprovados + 1;
        soma = soma + notas[i];
    }
    if(notas[i] < 7){
        reprovados = reprovados + 1;
        soma = soma + notas[i];
    }
    mediaClasse = soma / 10;
}
console.log("A média das notas é: " + parseFloat(mediaClasse.toFixed(1)));
console.log(parseFloat(aprovados) + " alunos aprovados e " + parseFloat(reprovados) + " reprovados.");