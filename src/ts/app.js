"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var casino_1 = require("./casino");
var player_1 = require("./player");
console.clear();
var edad = Number(ReadlineSync.question("Ingrese su Edad: "));
var nombre = ReadlineSync.question("Ingrese su nombre: ");
var montoInicial = Number(ReadlineSync.question("Ingrese la cantidad de creditos para jugar: "));
var jugador = new player_1.Player(nombre, edad, montoInicial);
var casino = new casino_1.Casino(jugador);
casino.newGame();
