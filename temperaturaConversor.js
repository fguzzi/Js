const prompt = require("prompt-sync")();

let celsius = prompt("Digite graus Celsius: ");

let farenheit = (1.8 * parseFloat(celsius)) + 32;
let kelvin = parseFloat(celsius) + 273.15;

console.log(celsius + " °C " + " é igual a " + farenheit + " °F " + " e " + kelvin + " °K")