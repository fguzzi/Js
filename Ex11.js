const r = require("readline-sync");

let num = r.questionInt("Digite um numero inteiro para ser analisado: ");

if(num > 0){
    console.log("Numero digitado: positivo.");
}else{
    if(num == 0){
        console.log("Zero é um numero neutro");
    }else{
        console.log("Numero digitado: negativo");
    }
}