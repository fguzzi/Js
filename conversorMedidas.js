const prompt = require("prompt-sync")();

let metros = prompt("Digite um valor em metros: ");

let mm = metros * 1000;
let cm = metros * 100;
let dm = metros * 10;
let dam = metros / 10;
let hec = metros / 100;
let km = metros / 1000;


console.log(metros + " m equivalem a: " +
        mm + " mm " +
        cm + " cm " +
        dm + " dm " +
        dam + " dam " +
        hec + " hec " +
        km + " km ");            