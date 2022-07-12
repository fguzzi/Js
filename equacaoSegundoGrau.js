const prompt = require("prompt-sync")();

let x1;
let x2;
let delta;

console.log('--- EQUAÇÃO DO 2º GRAU ---');

let a = parseInt(prompt('Digite o valor de a: '));
let b = parseInt(prompt('Digite o valor de b: '));
let c = parseInt(prompt('Digite o valor de c: '));

delta = (Math.pow(b,2)) - (4 * a * c);

x1 = ((-b + (Math.sqrt(delta))) / (2 * a));
x2 = ((-b - (Math.sqrt(delta))) / (2 * a));

console.log('As raízes dessa equação são ' + x1 + ' e ' + x2);