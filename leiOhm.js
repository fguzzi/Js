const prompt = require("prompt-sync")();

let r = 0;
let i = 0;
let v = 0;

let esc = prompt("Digite [1] para calcular a corrente, [2] para resistência ou [3] para tensão: ");

switch(parseInt(esc)){
    case esc == 1:
        r = prompt("Digite a resistência em Ohms = ");
        v = prompt("Digite a tensão em Volts = ");
        i = v / r;
        console.log("A corrente é " + parseInt(i) + " Amperes ");
        break;

    case esc == 2:
        i = prompt("Digite a corrente em Amperes: ");
        V = prompt("Digite a tensão em Volts = ");
        r = v / i;
        console.log("A resistência é " + parseInt(r) + " Ohms");
        break;

    case esc == 3:
        r = prompt("Digite a resistência em Ohms = ");
        i = prompt("Digite a corrente em Amperes: ");
        v = r * i;
        console.log("A tensão é " + parseInte(v) + " Volts");
        break;
}