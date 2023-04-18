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
exports.Ruleta = void 0;
var funciones_1 = require("./funciones");
var playgame_1 = require("./playgame");
var ReadlineSync = require("readline-sync");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this) || this;
        _this.numbers = [];
        _this.colors = [];
        for (var i = 0; i < 37; i++) {
            _this.numbers.push(i);
            if (i === 0)
                _this.colors.push("verde");
            if (i % 2 === 0)
                _this.colors.push("rojo");
            if (i % 2 === 1)
                _this.colors.push("negro");
        }
        return _this;
    }
    Ruleta.prototype.girarRuleta = function (numero, pares, impares, rojo, negro, mayores, menores) {
        var rl = Number(ReadlineSync.question("Desea apostar un pleno?\n       \n       1)Si\n       2)No\n\n       3)Volver al menu principal\n\n\n       Seleccione una opcion: "));
        return 1;
    };
    Ruleta.prototype.play = function () {
        var rl = Number(ReadlineSync.question("\n---------------------------------\nBienvenido al juego de la Ruleta! \n---------------------------------\n                \n1) Realizar apuesta\n2) Instrucciones\n3) Probabilidades\n4) Volver al menu anterior\n\n---------------------------------\n        \nSeleccione una opcion: "));
        switch (rl) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                console.clear();
                (0, funciones_1.starGame)();
                break;
            default:
                break;
        }
    };
    Ruleta.prototype.getCash = function () {
    };
    return Ruleta;
}(playgame_1.PlayGame));
exports.Ruleta = Ruleta;
