const prompt = require("prompt-sync")();
num = Number(prompt("ingrese un numero "));

if (num > 0) {
    console.log("es positivo");
} else if (num < 0) {
    console.log("es negativo");
} else {
    console.log("es cero");
}