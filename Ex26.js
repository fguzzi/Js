const r = require("readline-sync");
let ttm = 0;
let ttf = 0;
let ttidm = 0;
let ttidf = 0;
let medf = 0;
let medm = 0;

for(i = 1; i <= 10; i++){
    let sexo = r.question("Digite sexo [ M ou F ]: ");
    let idade = r.questionInt("Digite idade: ");

    if(sexo == "F"){
        ttf = ttf + 1;
        ttidf = ttidf + idade;
    }
    if(sexo == "M"){    
        ttm = ttm + 1;
        ttidm = ttidm + idade;
    }    
}

medf = ttidf / ttf;
medm = ttidm / ttm;

console.log("Total de homens = " + ttm);
console.log("Total de mulheres = " + ttf);
console.log("Media idade masculina = " + medm);
console.log("Media idade feminina = " + medf);