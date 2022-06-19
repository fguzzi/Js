const r = require("prompt-sync")();

let qtde = r("Digite quantos números quer inserir: ");

i = 1;
while(i <= qtde){
    let num = r("Digite um número: ");
    if(num % 2 == 0){
        console.log("Mostrando apenas números pares: " + num);
    }
    i++
}