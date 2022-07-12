function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const prompt = require("prompt-sync")();

let qt = parseInt(prompt('Quantas apostas você deseja?: '));
let palpite = [];
x = 1;
while(x <= qt){          
    for(i = 1; i <= 6; i++){
        palpite.splice(0, 0, getRandomInt(1, 60));
        }
        console.log(palpite);
        palpite.length = 0;
x++
}