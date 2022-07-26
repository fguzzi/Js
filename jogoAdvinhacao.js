const pr = require("prompt-sync")();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("PENSEI EM UM NÚMERO DE 1 A 20. TENTE ADVINHAR.");


let sorteio = parseInt(getRandomInt(1, 20));
console.log(sorteio)
let palpite = parseInt(pr('Digite seu palpite: '));
if(palpite < sorteio){
    console.log('O número era ' + sorteio + '.' + ' Você perdeu !!!!');
}else if(palpite > sorteio){
    console.log('O número era ' + sorteio + '.' + ' Você perdeu !!!!');
}else{
    console.log('VOCÊ ACERTOU !! PARABÉNS !!!!');
}