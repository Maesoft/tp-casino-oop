"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dice = void 0;
var ReadlineSync = require("readline-sync");
var playgame_1 = require("./playgame");
var Dice = /** @class */ (function (_super) {
    __extends(Dice, _super);
    function Dice() {
        return _super.call(this) || this;
    }
    Dice.prototype.play = function (creditos) {
        console.clear();
        this.creditos = creditos;
        var rl = Number(ReadlineSync.question("---------------------------------\n    Bienvenido al juego de Dados! \n    ---------------------------------\n                  \n    1) Jugar\n    2) Instrucciones\n    3) Volver al menu anterior\n    \n    ---------------------------------\n    Creditos: ".concat(this.creditos, "\n    \n    Seleccione una opcion: ")));
        switch (rl) {
            case 1:
                this.playDice();
                break;
            case 2:
                console.clear();
                console.log("El objetivo del juego es apostar por el resultado de dos dados.\n\nSi el lanzamiento de salida es 7 o 11, el jugador gana automáticamente.\n\nSi el lanzamiento de salida es 2, 3 o 12, el jugador pierde automáticamente.\n\nSi el lanzamiento de salida es cualquier otro número (4, 5, 6, 8, 9, o 10)\n, ese número se convierte en el 'punto' del jugador. El objetivo del jugador es ahora volver a tirar los dados y conseguir el mismo número antes de sacar un 7.\n\nSi el jugador saca un 7 antes de conseguir su punto, pierde.\n\nSi el jugador consigue su punto antes de sacar un 7, gana.");
                ReadlineSync.question("Presione una tecla para continuar.");
                this.play(this.creditos);
                break;
            case 3:
                console.clear();
                return this.creditos;
                break;
            default:
                break;
        }
        return this.creditos;
    };
    Dice.prototype.getCash = function () {
        return this.creditos;
    };
    Dice.prototype.roll = function () {
        this.dice1 = Math.floor(Math.random() * 6) + 1;
        this.dice2 = Math.floor(Math.random() * 6) + 1;
    };
    Dice.prototype.getSum = function () {
        return this.dice1 + this.dice2;
    };
    Dice.prototype.playDice = function () {
        var isPlaying = true;
        while (isPlaying) {
            var choice = ReadlineSync.question("Elige una opcion: \n1. Tirar Dado\n2. Salir\n");
            switch (choice) {
                case "1":
                    console.clear();
                    this.roll();
                    var sum = this.getSum();
                    console.log("Cayo el ".concat(this.dice1, " y el ").concat(this.dice2, ", Suma ").concat(sum));
                    if (this.point === null) {
                        if (sum === 7 || sum === 11) {
                            console.log("Felicidades, ganaste!");
                        }
                        else if (sum === 2 || sum === 3 || sum === 12) {
                            console.log("Perdiste!");
                        }
                        else {
                            console.log("Tu puntaje es ".concat(sum, ", sigue tirando hasta que aciertes o saques un 7."));
                            this.point = sum;
                        }
                    }
                    else {
                        if (sum === this.point) {
                            console.log("Felicidades, diste con tu puntaje!");
                            this.point = null;
                        }
                        else if (sum === 7) {
                            console.log("Sacaste un 7 antes de llegar a tu punto y perdiste!");
                            this.point = null;
                        }
                        else {
                            console.log("Sumaste ".concat(sum, ", sigue tirando hasta que aciertes o caiga un 7."));
                        }
                    }
                    break;
                case "2":
                    console.clear();
                    console.log("Gracias por jugar!");
                    isPlaying = false;
                    break;
                default:
                    console.log("Por favor decide las opciones anteriores...");
                    break;
            }
        }
    };
    return Dice;
}(playgame_1.PlayGame));
exports.Dice = Dice;
