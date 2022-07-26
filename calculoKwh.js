const prompt = require("prompt-sync")();

console.log('CALCULO Kw/h');

let p = parseFloat(prompt('Digite a potência em W: '));
let h = parseFloat(prompt('Digite nº de horas: '));
let d = parseFloat(prompt('Digite número de dias: '));

let resultado = (p * h * d) / 1000;

console.log('Total de ' + resultado + ' Kw/h');
