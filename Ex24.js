const r = require("readline-sync");

let prod = 0

for(c = 1; c <= 10; c++){
    for(i = 1; i <= 10; i++){
        prod = c * i;
        console.log(c + " * " + i + " = " + prod);
    }
}