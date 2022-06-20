const r = require("prompt-sync")();

console.log("Você digitará 2 números para verificar qual é o maior. Máximo de repetições 3.")

let i = 1;
while(i <= 3){
    let num1 = r("Digite o primeiro número: ");
    let num2 = r("Digite o segundo número: ");
    if(parseInt(num1) < parseInt(num2)){
        console.log("O menor é " + parseInt(num1));
    }else{
        console.log("O menor é " + parseInt(num2));
    }
    let op = r("Deseja continuar? [S ou N]: ");
    if(op == "N"){
        break;
    }
    i++;
}
console.log("Encerrado.");