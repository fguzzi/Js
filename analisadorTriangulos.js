const prompt = require("prompt-sync")();

s1 = parseFloat(prompt('Digite o primeiro segmento: '));
s2 = parseFloat(prompt('Digite o segundo segmento: '));
s3 = parseFloat(prompt('Digite o terceiro segmento: '));

if(s1 < s2 + s3 && s2 < s1 + s3 && s3 < s1 + s2){
    console.log('Esses segmentos podem formar um triângulo.')
    if(s1 == s2 && s2 == s3 && s3 == s1){
        console.log('Ele será equilátero.');
    }
    else if(s1 != s2 && s2 != s3 && s3 != s1){
        console.log('Ele será escaleno.');
    }
    else{
        console.log('Ele será isóceles.');
    }
}
else{
    console.log('Com essas medidas não será possível formar um triângulo.');
}