const prompt = require("prompt-sync")();
edad = Number(prompt("escriba su edad "));

if (edad >= 18) {
    console.log("puedes entrar");
} else {
    console.log("no puedes entrar");
}