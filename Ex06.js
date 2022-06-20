const r = require("readline-sync");

let medPol = r.questionFloat("Digite a medida em pol: ");

let medCm = medPol * 2.54;

console.log(medPol + " pol equivale a " + medCm.toFixed(2));