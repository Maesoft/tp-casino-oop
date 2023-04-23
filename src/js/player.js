"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(nombre, edad, saldoInicial) {
        this.name = nombre;
        this.age = edad;
        this.amount = saldoInicial;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getAge = function () {
        return this.age;
    };
    Player.prototype.getAmount = function () {
        return this.amount;
    };
    Player.prototype.setAmount = function (monto) {
        this.amount = monto;
    };
    return Player;
}());
exports.Player = Player;
