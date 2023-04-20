"use strict";
exports.__esModule = true;
exports.starGame = exports.checkAge = void 0;
var ReadlineSync = require("readline-sync");
var ruleta_1 = require("./ruleta");
var ruleta = new ruleta_1.Ruleta();
function checkAge() {
    var rl = Number(ReadlineSync.question("Ingrese su edad:"));
    if (!isNaN(rl)) {
        if (rl > 17) {
            console.clear();
            starGame();
        }
        else {
            console.clear();
            console.log("Tienes que ser mayor de edad para jugar.");
        }
    }
    else {
        console.clear();
        console.log("Ingrese un numero.");
        checkAge();
    }
}
exports.checkAge = checkAge;
function starGame() {
    var rl = Number(ReadlineSync.question("\n********************************\n* BIENVENIDO AL CASINO VIRTUAL *\n********************************\nSeleccione una opcion:\n1) Blackjack\n2) Poker\n3) Ruleta\n4) Tragamonedas Tradicional\n5) Tragamonedas Progresiva\n\n9) Salir\n\nSeleccione una opcion: "));
    switch (rl) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            console.clear();
            ruleta.play();
            break;
        case 4:
            break;
        case 5:
            break;
        case 9:
            console.clear();
            console.log("Gracias por venir, vuelva pronto!");
            break;
        default:
            console.clear();
            console.log("Intruduzca una opcion valida.");
            break;
    }
}
exports.starGame = starGame;
