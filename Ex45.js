const r = require("prompt-sync")();


let estoque = {};
let produtos = [];

estoque.percentualLucro = 40;
estoque.produtos;

produtos.descrição = "Corda de Aço - Guitarra";
produtos.fornecedor = "Gianinni";
produtos.valorCompra = 35;
produtos.valorVenda = 35 + (35 * (40 / 100));
produtos.quantidade = 150;

console.log(produtos.descrição);
console.log(produtos.fornecedor);
console.log(produtos.valorCompra.toFixed(2));
console.log(produtos.valorVenda.toFixed(2));
console.log(produtos.quantidade);

console.log();

console.log(estoque.percentualLucro.toFixed(2));
console.log(produtos);