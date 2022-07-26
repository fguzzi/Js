const prompt = require('prompt-sync')();
let temp = 0;
let resultado = 0;
let op;

console.log('CONVERSOR DE TEMPERATURAS');

console.log('[1] - °C para °F');
console.log('[2] - °C para °K');
console.log('[3] - °F para °C');
console.log('[4] - °F para °K');
console.log('[5] - °K para °C');
console.log('[6] - °K para °F');


while(op != 'n'){
    let esc = prompt('Escolha uma opção: ')
    switch(esc){
        case '1':
            temp = parseFloat(prompt('Digite a temperatura em °C: '));
            resultado = (temp * 1.8) + 32;
            console.log(temp.toFixed(2) + ' °C corresponde(m) a ' + resultado.toFixed(2) + ' °F');
            break
        case '2':
            temp = parseFloat(prompt('Digite a temperatura em °C: '));
            resultado = temp + 273.15 ;
            console.log(temp.toFixed(2) + ' °C corresponde(m) a ' + resultado.toFixed(2) + ' °K');
            break  
        case '3':
            temp = parseFloat(prompt('Digite a temperatura em °F: '));
            resultado = (temp - 32) / 1.8;
            console.log(temp.toFixed(2) + ' °F corresponde(m) a ' + resultado.toFixed(2) + ' °C');
            break  
        case '4':
            temp = parseFloat(prompt('Digite a temperatura em °F: '));
            resultado = ((temp - 32) / 1.8) + 273.15;
            console.log(temp.toFixed(2) + ' °F corresponde(m) a ' + resultado.toFixed(2) + ' °K');
            break  
        case '5':
            temp = parseFloat(prompt('Digite a temperatura em °K: '));
            resultado = temp - 273.15;
            console.log(temp.toFixed(2) + ' °K corresponde(m) a ' + resultado.toFixed(2) + ' °C');
            break  
        case '6':
            temp = parseFloat(prompt('Digite a temperatura em °K: '));
            resultado = ((temp - 273.15) * 1.8) + 32;
            console.log(temp.toFixed(2) + ' °K corresponde(m) a ' + resultado.toFixed(2) + ' °F');
            break  
        default:
            console.log('Opção inválida. Digite somente valores de 1 a 6');
        }
op = prompt('Deseja continuar? [s/n]: ');
if(op == 'n'){
    console.log('Encerrado.')
}
    }
