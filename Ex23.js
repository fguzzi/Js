const r = require("readline-sync");

let prod = 0

let num = r.questionInt("Qual tabuada vai ser exibida?: ");
for(i = 1; i <= 10; i++){
    prod = num * i;
    console.log(num + " * " + i + " = " + prod);
}