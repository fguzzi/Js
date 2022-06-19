const r = require("readline-sync");

let ttsim = 0;
let ttnao = 0;
let mulsim = 0;
let homnao = 0;

for(i = 1; i <= 10; i++){
    let sexo = r.question("Sexo M ou F?: ");
    let resposta = r.question("S ou N? ");
    if(sexo == "F" && resposta == "S"){
        mulsim = mulsim + 1;
    }
    if(sexo == "M" && resposta == "N"){
        homnao = homnao + 1;
    }
    if(resposta == "N"){
        ttnao = ttnao + 1;
    }
    if(resposta == "S"){
        ttsim = ttsim + 1;
    }
    
}
console.log(ttsim + " pessoas responderam Sim.")
console.log(ttnao + " pessoas responderam Nao.")
console.log(mulsim + " mulheres responderam Sim.")
console.log(homnao + " homens responderam Nao.")