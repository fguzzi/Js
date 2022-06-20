const r = require("prompt-sync")();

console.log("Você digitará números com limite máximo de 5 para saber resultados quando somados os números pares e subtraídos os ímpares.")

let soma = 0;
i = 1;
while(i <= 5){
    let num = r("Digite nº: ");
    if(num % 2 == 0){
        soma = soma + parseInt(num);
    }
    if(num % 2 == 1){
        soma = soma - parseInt(num);
    }
    let op = r("Deseja sair? [S ou N]: ");
    if(op == "S"){
        break;
    }
    i++
}
console.log("Somando números pares e subtraindo os ímpares, o resultado foi " + soma);