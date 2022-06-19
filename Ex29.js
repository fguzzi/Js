const r = require("prompt-sync")();

let num = r("Digite um número para ver a tabuada: ");

let resultado = 0;
let i = 1;
while(i <= 10){
    resultado = num * i
    console.log(num + " x " + i + " = " + resultado)
    i++
}