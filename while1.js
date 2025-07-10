const prompt = require("prompt-sync")();
num = Number(prompt("ingrese un numero "));
contador = 0;

while (contador < num) {
    contador++
    console.log(contador)
}