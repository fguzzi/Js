const r = require("prompt-sync")();

let senha = 1234;

let tent = 0;
let i = 1;
while(i <= 3){
    let tentativa = r("Digite a senha: ");
    if(tentativa == senha){
        console.log("Senha correta.");
        break;
    }else{ 
        console.log("Senha incorreta.");
        tent = 3 - i;
        if(tent <= 2){
            console.log("Você ainda tem mais " + tent + " tentativa(s).");
        }
        if(tent == 0){
            console.log("Esgotadas as tentativas.");
        }
        i++;
        }
    }