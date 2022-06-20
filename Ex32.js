const r = require("prompt-sync")();

console.log("Você digitará números com limite máximo de 5 para saber a soma.")

let soma = 0;
i = 1;
while(i <= 5){
    let num = r("Digite nº: ");
    parseInt(num);
    soma = soma + parseInt(num);
    let op = r("Deseja sair? [S ou N]: ");
    if(op == "S"){
        break;
    }
    i++
}
console.log("A soma dos números digitados é " + soma);