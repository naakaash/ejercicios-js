const prompt = require("prompt-sync")();
num = Number(prompt("ingrese un numero "));

for(let i = 1; i < 11; i++) {
    let resul = num * i
    console.log(i, "x", num, "=", resul);
    
}