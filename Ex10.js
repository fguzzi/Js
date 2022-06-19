const r = require("readline-sync");

let pcompra = r.questionFloat("Preco de compra do produto: ");
let percentual = r.questionFloat("Porcentagem de lucro: ");

let precovenda = pcompra + (pcompra * (percentual / 100));
if(percentual < 50){
   console.log("Produto vendido com pequena margem de lucro");
}
console.log("Valor de venda igual a " + precovenda);