const prompt = require("prompt-sync")();

console.log('EQUAÇÃO 1º GRAU MODELO "ax + b = 0"');

let a = parseInt(prompt("Digite o valor de a: "));
let b = parseInt(prompt("Digite o valor de b: "));
let x

if(a == 0){
    console.log('Equação não pode ser resolvida, pois valor de a = 0.')
}
else{
    let x = -b / a;
    console.log('O valor de x para a equação é ' + x);
}  