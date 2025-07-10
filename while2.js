const prompt = require("prompt-sync")();
con = prompt("escriba su contraseña ");

while (con != "1234") {
    console.log("contraseña incorrecta");
    con = prompt("escriba su contraseña ");
}
console.log("contraseña correcta");