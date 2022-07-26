const prompt = require("prompt-sync")();
let cont

console.log('CALCULO DE REATÂNCIA');


console.log('OPÇÕES:');

console.log('[1] - Reatância Capacitiva');
console.log('[2] - Reatância Indutiva');

while(cont != 'n'){
    let op = prompt('Digite sua opção: ');
    switch(op){
        case '1':
            let freq1 = parseFloat(prompt('Digite a frequência em Khz: '));
            let cap = parseFloat(prompt('Digite a capacitância em microFarad: '));
            let rc = (1 / (2 * Math.PI * freq1 * cap)) * 1000;
            console.log('A Reatância Capacitiva é igual a ' + rc.toFixed(2) + ' Ohms');
            break;
        case '2':
            let freq2 = parseFloat(prompt('Digite a frequência em Khz: '));
            let imp = parseFloat(prompt('Digite a capacitância em miliHenry: '));
            let ri = (2 * Math.PI * freq2 * imp * 1000) / 1000;
            console.log('A Reatância Capacitiva é igual a ' + ri.toFixed(2) + ' Ohms');
            break;
        default:
            console.log('Opção inválida. Digite apenas 1 ou 2.');
        }
cont = prompt('Deseja continuar? [s/n]: ');
if(cont == 'n'){
    console.log('Encerrado.')
    }
}
