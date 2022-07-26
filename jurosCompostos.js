const prompt = require("prompt-sync")();

console.log('CALCULO DE JUROS COMPOSTOS');

let capital = parseFloat(prompt('Digite o capital em R$: '));
let taxa = parseFloat(prompt('Digite a taxa de juros (em decimais): '));
let tempo = parseInt(prompt('Digite tempo em meses: '));

let montante = capital * (Math.pow((1 + taxa), tempo));

console.log('O valor montante é igual a R$ ' + montante.toFixed(2));