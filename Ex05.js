const r = require("readline-sync");

let medCm = r.questionFloat("Digite a medida em cm: ");

let medPol = medCm / 2.54;

console.log(medCm + " cm equivale a " + medPol.toFixed(2));