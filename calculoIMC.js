const prompt = require('prompt-sync')();
let op;
console.log('CALCULO IMC');

while(op !='n'){
    let peso = parseFloat(prompt('Digite o peso em Kg: '));
    let altura = parseFloat(prompt('Digite a altura em m: '));
    let imc = peso / (Math.pow(altura, 2));

    console.log('RESULTADOS:');
    console.log('IMC = ' + imc.toFixed(1));

        if(imc < 18.5){
            console.log('Classificação: Magreza');
        } else if(imc > 18.5 && imc < 24.9){
            console.log('Classificação: Normal');
        } else if(imc > 24.9 && imc < 29.9){
            console.log('Classificação: Sobrepeso');
        } else if(imc > 29.9 && imc < 34.9){
            console.log('Classificação: Obesidade I');
        } else if (imc > 34.9 && imc <= 40){
            console.log('Classificação: Obesidade II');
        } else{
            console.log('Classificação: Obesidade III');
        }
    let op = prompt('Deseja continuar? [s/n]: ');
    if(op == 'n'){
        console.log("Encerrado.");
        break
    }
}
